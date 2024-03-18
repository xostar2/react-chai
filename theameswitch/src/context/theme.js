import {creatContext ,useContext} from "react"
//part 2 of usecontext
export const ThemeContext = creatContext({
    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})

export const ThemeProvider =ThemeContext.ThemeProvider

export default function useTheme(){
    return useContext(ThemeContext)
}