import React from 'react';
import s from './Header.module.css';
import BlockStyles from './../block-styles/BlockStyles.module.css';
import Navbar from './nav/Navbar';
import HeaderLogo from './logo/HeaderLogo';
import UserSearch from './userSearch/UserSearch';

const Header = () => {
    return (
        <header className={`${s.header} ${BlockStyles.blockShadow}`}>
            <div className="container">
                <div className={s.body}>
                    <Navbar />
                    <HeaderLogo />
                    <UserSearch />
                </div>
            </div>
        </header>
    );
}

export default Header;