import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';



const App = () => {
    const { theme, toogleTheme } = useTheme()
    return (
        <div className={`${classNames('app', {hovered: true, selected: true}, [theme, 'cls1', 'cls2', 'cls3'])}`}>
            <button onClick={toogleTheme}>TOOGLE</button>
            <NavBar />
            <AppRouter />
        </div>
    )
}
export default App