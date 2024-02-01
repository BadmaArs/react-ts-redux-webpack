import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss'
import { Link } from 'react-router-dom';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.links}>
                <Link to={'/'} className={cls.mainLink}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
            </div>
        </div> 
    )
}
