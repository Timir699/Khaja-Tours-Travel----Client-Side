import { createContext, useEffect, useState } from "react"

export const ServiceContext = createContext()


// Auth ServiceProvider context
const ServiceProvider = ({ children }) => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages")
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    return (
        <ServiceContext.Provider value={allServices} >
            {children}
        </ServiceContext.Provider >
    )
}

export default ServiceProvider