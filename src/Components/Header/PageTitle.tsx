import React from "react"

type PageTitleProps = {
  title: string;
  subtitle: string;
  loggedIn: boolean;
}

const PageTitle: React.FunctionComponent<PageTitleProps> = ({title, subtitle, loggedIn}) => {
  return (
    <>
      { loggedIn ? 
      <div id='page-title'>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
      :
      <div />
      }
    </>
  )
}

export default PageTitle