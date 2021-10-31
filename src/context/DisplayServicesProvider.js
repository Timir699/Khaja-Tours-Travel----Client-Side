import { createContext, useState } from "react"

export const DisplayServicesContext = createContext()

// Auth Provider context
const DisplayServicesProvider = ({ children }) => {
    const [displayServices, setDisplayServices] = useState([])
    return (
        <DisplayServicesContext.Provider value={{setDisplayServices, displayServices}}>
            {children}
        </DisplayServicesContext.Provider>
    )
}

export default DisplayServicesProvider