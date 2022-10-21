import Head from "next/head";
import Navigation from "./navigation";


const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`azaza+${keywords}`}/>
                <title>azaza</title>
            </Head>
            <div>
                <Navigation/>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainContainer;