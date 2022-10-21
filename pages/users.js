import Navigation from "../component/navigation";
import {useEffect, useState} from "react";
import Link from "next/link";
import style from '../styles/users.module.scss'
import MainContainer from '../component/MainContainer'
const Users = ({users}) => {

    return (
        <MainContainer keywords={'atata'}>
        <div className={style.users}>
            <h1>ololol</h1>
            <ul>
                {
                    users.map(user => <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>
                                    {user.name}
                                </a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context){
    try {
        const res=await  fetch(`https://jsonplaceholder.typicode.com/users`)
        const users=await res.json()
        return{
            props:{users}
        }
    }catch (e) {
        console.log(e)
    }

}

