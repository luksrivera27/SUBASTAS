import react from 'react';
import FrontPageAdmi from "./pages/FrontPageAdmi";
import Login from "./pages/Login";
function manejo(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return(<FrontPageAdmi/>)
    }
    return(<Login/>)
}