import A from './A'
import style from '../styles/navbar.module.css'


const Navigation = () => {
    return (
        <div className={style.navbar}>
            <A text={'azaza'} href={'/'}/>
            <A text={'ololo'} href={'/users'}/>
        </div>
    );
};

export default Navigation;