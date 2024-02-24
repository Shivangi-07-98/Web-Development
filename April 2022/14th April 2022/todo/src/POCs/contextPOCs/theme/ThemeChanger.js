import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
export let ThemeContext = React.createContext("");

function App() {
    let [theme, setTheme] = React.useState("light");
    const handleTheme = () => {
        if(theme == "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <button type="button" onClick={handleTheme}>Change Theme</button>
                <NavBar></NavBar>
                <Footer></Footer>
            </ThemeContext.Provider>
        </div>
    )
}

export default App