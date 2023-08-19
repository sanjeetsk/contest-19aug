import React from "react";
// import LoginPage from "./Components/LoginPage";
import ProfilePage from "./Components/ProfilePage";
import SignIn from "./Components/SignIn";
import './App.css';

const App = () => {
    const token = localStorage.getItem("token");
    if(token){
        return <ProfilePage />;
    }
    else{
        return <SignIn />;
    }
}

export default App;