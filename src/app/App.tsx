import { Route, Routes, Link } from "react-router-dom";
import { Suspense, useContext } from "react";
import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";



const App = () => {
    const { theme, toogleTheme } = useTheme()
    return (
        <div className={`${classNames('app', {hovered: true, selected: true}, [theme, 'cls1', 'cls2', 'cls3'])}`}>
            <button onClick={toogleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/" element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default App