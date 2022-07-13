import React from "react";
import HomeCenter from "./center/HomeCenter";
import s from './Home.module.css';
import HomeLeft from "./left/HomeLeft";
import HomeRight from "./right/HomeRight";

const Home = (props) => {
    return(<div className={s.home}>
        <HomeLeft />
        <HomeCenter posts={props.state.posts} addPost={props.addPost}/>
        <HomeRight />
    </div>);
}

export default Home;