import { createContext } from "react";
import { Time } from "../types/types";



export const TimeContext = createContext<Time>({} as Time);