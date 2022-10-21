import MainContainer from '../../component/MainContainer'

export default function ({user}) {
    console.log(user)

    return(
        <MainContainer keywords={"ololol"}>
        <h1>user id {user.id}</h1>
            <div>{user.name}</div>
        </MainContainer>

    )
}

export async function getServerSideProps(context){
    try {
        const res=await  fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        const user=await res.json()
        return{
            props:{user}
        }
    }catch (e) {
        console.log(e)
    }

}