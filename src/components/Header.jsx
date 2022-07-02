import React from 'react';
import logo from './../img/logo.png';
import lupa from './../img/za.png';
import face from './../img/face.jpg';

const Header = () => {
    return (
        <header className='header block-shadow'>
            <div className="container">
                <div className="header__body">
                    <div className="header__buttons">
                        <div className="header__button">
                            <a href="#">Home</a>
                        </div>
                        <div className="header__button">
                        <a href="#">Message</a>
                        </div>
                        <div className="header__button">
                        <a href="#">Notification</a>
                        </div>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt="" width='37px' height='30px'/>
                    </div>
                    <div className="header__navbar">
                        <div className="header__form">
                            <div className="header__form_search">
                                <input type="text" placeholder='Search...' />
                            </div>
                            <div className="header__form_button">
                                <input type="image" src={lupa} width='20px' height='20px' />
                            </div>
                        </div>
                        <div className="header__profile">
                            <div className="header__profile_image">
                                <img src={face} alt="" width="30px" height="30px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;