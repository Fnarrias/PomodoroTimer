import { useState } from "react"
import { TimeContext } from "./TimeContext"

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TimeProvider = ({children}: props) => {
    const [time, setTime] = useState(20)
  return (
    <TimeContext.Provider value={{time, setTime}}>
        {children}
    </TimeContext.Provider>
  )
}
