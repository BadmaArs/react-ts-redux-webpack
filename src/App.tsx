import { Route, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import './styles/index.scss';
import { ThemeContext, Theme } from "./theme/ThemeContext";



const App = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toogleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }
    return (
        <div className={`app ${theme}`}>
            <button onClick={toogleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />}/>
                    <Route path="/" element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default App