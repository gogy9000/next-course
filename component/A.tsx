import Link from "next/link";
import style from '../styles/link.module.css'


const A = ({href,text,}) => {

    return (

        <Link href={href}>
            <a className={style.link}>{text}</a>
        </Link>
    );
};

export default A;