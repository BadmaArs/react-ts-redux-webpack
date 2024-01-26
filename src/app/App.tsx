import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';



const App = () => {
    const { theme, toogleTheme } = useTheme()
    return (
        <div className={`${classNames('app', {hovered: true, selected: true}, [theme, 'cls1', 'cls2', 'cls3'])}`}>
            <button onClick={toogleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}
export default App