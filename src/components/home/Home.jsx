import React from "react";
import HomeCenter from "./center/HomeCenter";
import s from './Home.module.css';
import HomeLeft from "./left/HomeLeft";
import HomeRight from "./right/HomeRight";

const Home = () => {
    return(<div className={s.home}>
        <HomeLeft />
        <HomeCenter />
        <HomeRight />
    </div>);
}

export default Home;