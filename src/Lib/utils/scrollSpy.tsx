import React, { useState, useEffect } from 'react';

const ScrollspyNav = (props: { scrollTargetIds: any; activeNavClass: any; scrollDuration: any; }) => {

    // useEffect(() => {
    //     if(props.router && props.router === 'HashRouter'){
    //         setHomeDefaultLink('#/')
    //         setHashID('#/#')
    //     } else {
    //         setHomeDefaultLink('/')
    //         setHashID('#')
    //     }
    // }, [props.router])

    const easeInOutQuad = (current_time: number, start: number, change: number, duration: number) => {
        current_time /= duration / 2;
        if (current_time < 1) return change / 2 * current_time * current_time + start;
        current_time--;
        return -change / 2 * (current_time * (current_time - 2) - 1) + start;
    };

    const scrollTo = (start: number, to: number, duration: number) => {
        let change = to - start,
            currentTime = 0,
            increment = 10;

        let animateScroll = () => {
            currentTime += increment;
            let val = easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    const getNavLinkElement = (sectionID: any) => {
        return document.querySelector(`a[href='#${sectionID}']`);
    }

    const getNavToSectionID = (navHref: any) => {
        return navHref.includes('#') ? navHref.replace('#', "") : "";
    }

    useEffect(() => {

        if (document.querySelector(`a[href='/']`)) {
            document.querySelector(`a[href='/']`)!.addEventListener("click", (event) => {
                event.preventDefault();
                scrollTo(window.pageYOffset, 0, props.scrollDuration);
                window.location.hash = "";
            });
        }

        document.querySelector("div[data-nav='list']")!.querySelectorAll("a").forEach((navLink) => {
            navLink.addEventListener("click", (event) => {
                let scrollTargetPosition;
                event.preventDefault();
                let sectionID = getNavToSectionID(navLink.getAttribute("href"));
                if(document.getElementById(sectionID) === null){
                    scrollTargetPosition = 0
                } else{
                    scrollTargetPosition = document.getElementById(sectionID)!.offsetTop;
                    // console.log(scrollTargetPosition)
                }

                if(scrollTargetPosition === undefined || scrollTargetPosition === 0){
                    scrollTo(window.pageYOffset, 0, props.scrollDuration);
                    // console.log(scrollTargetPosition)
                } else {
                    // console.log(scrollTargetPosition)
                    scrollTo(window.pageYOffset, scrollTargetPosition, props.scrollDuration);
                }
                
            });
        })

        window.addEventListener("scroll", scrollSection, true );
    }, [])
        

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", scrollSection, true );
        }
    }, []) 
    
    const scrollSection = () => {
            let scrollSectionOffsetTop;
            props.scrollTargetIds.forEach((sectionID: string, index: number) => {
                if(document.getElementById(sectionID) === null){
                    scrollSectionOffsetTop = 0
                    return;
                } else{
                    scrollSectionOffsetTop = document.getElementById(sectionID)!.offsetTop;
                    var navElement: any = getNavLinkElement(sectionID);
                    if (window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID)!.scrollHeight) {
                        // console.log(sectionID)
                        getNavLinkElement(sectionID)!.classList.add(props.activeNavClass);
                        (navElement.parentNode as HTMLElement).classList.add(props.activeNavClass);
                        clearOtherNavLinkActiveStyle(sectionID)
                    } else {
                        getNavLinkElement(sectionID)!.classList.remove(props.activeNavClass);
                        (navElement.parentNode as HTMLElement).classList.remove(props.activeNavClass);
                    }
    
                    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && index === props.scrollTargetIds.length - 1) {
                        getNavLinkElement(sectionID)!.classList.add(props.activeNavClass);
                        (navElement.parentNode as HTMLElement).classList.add(props.activeNavClass);
                        clearOtherNavLinkActiveStyle(sectionID);
                    }
                }               
            });
    }
    
    const clearOtherNavLinkActiveStyle = (excludeSectionID: any) => {
        props.scrollTargetIds.forEach((sectionID: any, index: any) => {
            var navElement: any = getNavLinkElement(sectionID);
            if (sectionID !== excludeSectionID) {
                getNavLinkElement(sectionID)!.classList.remove(props.activeNavClass);
                (navElement.parentNode as HTMLElement).classList.remove(props.activeNavClass);
            }
        });
    }

    return (
        <div data-nav="list">
        </div>
    );
}

export default ScrollspyNav;