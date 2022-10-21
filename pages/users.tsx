import Link from "next/link";
import style from '../styles/users.module.scss'
import MainContainer from '../component/MainContainer'
import {NextPageContext} from "next";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'atata'}>
            <div className={style.users}>
                <h1>ololol</h1>
                <ul>
                    {
                        users.map(user => <li key={user.id}>
                                <Link href={`/users/[id]`} as={`users/${user.id}`}>
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

export async function getStaticProps({req}: NextPageContext) {
    console.log(req)
    try {
        const res = await fetch(`${process.env.API_URL}/users`)
        const users = await res.json()
        return {
            props: {users}
        }
    } catch (e) {
        console.log(`error:`, e)
       return  {
            error:"error"
        }
    }

}

