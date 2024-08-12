import { useContext } from 'react'
import {ThemeContextProvid} from "../../context/ThemeContext"

const useTheme = () => useContext(ThemeContextProvid)

export default useTheme