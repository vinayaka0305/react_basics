import React,{useContext} from 'react'
import { ThemeContext } from '../themeContext/ThemeContext';

const FunctionComponent = () => {

    const {darkTheme,toggleTheme} = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor : darkTheme ? '#333' :'#ccc',
        color : darkTheme ?'#ccc':'#333',
        padding:'2rem',
        marign:'2rem'
    }
  return (
    <>
     <button onClick={toggleTheme}>Toggle</button>
     <div style={themeStyles}>functionComponent</div>
    </>
   
  )
}

export default FunctionComponent