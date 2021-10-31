import { createContext, useEffect, useState } from "react"

export const ServiceContext = createContext()


// Auth ServiceProvider context
const ServiceProvider = ({ children }) => {

    const [allServices, setAllServices] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/api/businessPackages")
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