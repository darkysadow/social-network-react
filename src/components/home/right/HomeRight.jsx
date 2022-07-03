import React from "react";
import Advertizement from "./advertizement/Advertizement";
import FriendsZone from "./friends/FriendsZone";
import s from "./HomeRight.module.css";
import Notifications from "./notifications/Notifications";

const HomeRight = () => {
    return(<div className={s.right}>
        <Notifications />
        <Advertizement />
        <FriendsZone />
    </div>);
}

export default HomeRight;