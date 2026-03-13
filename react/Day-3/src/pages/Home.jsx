import { Outlet } from "react-router-dom";
import { useAuth } from "../Authentication/UseAuth";


function Home(){
    const { user } = useAuth();
    
    return(
        <>
            <h1>Hello {user?.username} : {user?.role} ) Welcome Home.</h1>
            <Outlet/>
        </>
    )
}

export default Home;