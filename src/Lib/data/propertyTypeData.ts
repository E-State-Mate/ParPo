import {
    Attractions,
    BusinessCenter,
    Factory,
    Grass,
    HealthAndSafety,
    Hotel,
    House,
    RestaurantMenu,
    ShoppingCart,
    Store,
    Storefront,
} from '@mui/icons-material';

export const propertyTypes = [
    {
        propertyType: "Residential",
        image: House    
    },
    {
        propertyType: "Commercial",
        image: Store    
    },
    {
        propertyType: "Office",
        image: BusinessCenter 
    },
    {
        propertyType: "Industrial",
        image: Factory
    },
    {
        propertyType: "Retail",
        image: Storefront
    },
    {
        propertyType: "Restaurant",
        image: RestaurantMenu
    },
    {
        propertyType: "Shopping Center",
        image: ShoppingCart
    },
    {
        propertyType: "Health Care",
        image: HealthAndSafety
    },
    {
        propertyType: "Hospitality",
        image: Hotel
    },
    {
        propertyType: "Entertainment",
        image: Attractions
    },
    {
        propertyType: "Land",
        image: Grass
    }
]