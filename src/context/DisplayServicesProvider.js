import { createContext, useEffect, useState } from "react"

export const DisplayServicesContext = createContext()

// Auth Provider context
const DisplayServicesProvider = ({ children }) => {
    const [displayServices, setDisplayServices] = useState([])

    useEffect(() => {
        fetch("https://frightening-pirate-52052.herokuapp.com/businessPackages")
            .then(res => res.json())
            .then(data => setDisplayServices(data))
    }, [])
    return (
        <DisplayServicesContext.Provider value={{setDisplayServices, displayServices}}>
            {children}
        </DisplayServicesContext.Provider>
    )
}

export default DisplayServicesProvider