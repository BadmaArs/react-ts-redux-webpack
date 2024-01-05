import { Route, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import './styles/index.scss';
import { ThemeContext, Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
    const { theme, toogleTheme } = useTheme()
    return (
        <div className={`${classNames('app', {hovered: true, selected: true}, [theme, 'cls1', 'cls2', 'cls3'])}`}>
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