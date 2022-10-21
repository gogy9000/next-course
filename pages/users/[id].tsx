import MainContainer from '../../component/MainContainer'
import {NextPageContext} from "next";

export default function ({user}) {
    console.log(user)

    return(
        <MainContainer keywords={"ololol"}>
        <h1>user id {user.id}</h1>
            <div>{user.name}</div>
        </MainContainer>

    )
}

interface PostContextI extends NextPageContext{
    query:{
        id:string
    }
}

export async function getServerSideProps({query}:PostContextI){

    try {
        const res=await  fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
        const user=await res.json()
        return{
            props:{user}
        }
    }catch (e) {
        console.log(e)
    }

}