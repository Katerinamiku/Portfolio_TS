import React from 'react';
import Header from "./Header/Header";
import Home from "./Main/Home/Home";
import AboutMe from "./Main/AboutMe/AboutMe";
import MySkills from "./Main/MySkills/MySkills";
import Portfolio from "./Main/Portfolio/Portfolio";
import Contacts from "./Main/Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <MySkills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
