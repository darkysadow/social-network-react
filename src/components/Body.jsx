import React from 'react';
import profileBg from './../img/profile-bg.jpg';
import avatar from './../img/avatar.jpg';
import pages1 from './../img/pages1.jpg';
import pages2 from './../img/pages2.jpg';
import pages3 from './../img/pages3.jpg';
import pages4 from './../img/pages4.png';
import like from './../img/heart.png';

const Body = () => {
    return (
       <main>
           <div className="container">
               <div className="main">
                    <div className="main__left">
                        <div className="main__left__profile block-shadow block-margin">
                            <div className="main__left__profile__top">
                                <div className="main__left__profile__top__bg">
                                    <img src={profileBg} alt="" />
                                </div>
                                <div className="main__left__profile__top__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                            </div>
                            <div className="main__left__profile__bottom">
                                <div className="main__left__profile__bottom__fullname">
                                    <a href='#'>Name Surname</a>
                                </div>
                                <div className="main__left__profile__bottom__quote">
                                    <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
                                </div>
                            </div>
                        </div>
                        <div className="main__left__like block-shadow block-margin">
                            <div className="main__left__like__title block-title">
                                <p>page you may like</p>
                            </div>
                            <div className="main__left__like__list">
                                <div className="main__left__like__item">
                                    <div className="main__left__like__item__avatar">
                                        <img src={pages1} alt="" />
                                    </div>
                                    <div className="main__left__like__item__text">
                                        <div className="main__left__like__item__topic">
                                            <a href='#'>travel the world</a>
                                        </div>
                                        <div className="main__left__like__item__category">
                                            <p>adventure</p>
                                        </div>
                                    </div>
                                    <div className="main__left__like__item__reaction">
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                                <div className="main__left__like__item">
                                    <div className="main__left__like__item__avatar">
                                        <img src={pages2} alt="" />
                                    </div>
                                    <div className="main__left__like__item__text">
                                        <div className="main__left__like__item__topic">
                                        <a href='#'>foodcort nirala</a>
                                        </div>
                                        <div className="main__left__like__item__category">
                                            <p>food</p>
                                        </div>
                                    </div>
                                    <div className="main__left__like__item__reaction">
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                                <div className="main__left__like__item">
                                    <div className="main__left__like__item__avatar">
                                        <img src={pages3} alt="" />
                                    </div>
                                    <div className="main__left__like__item__text">
                                        <div className="main__left__like__item__topic">
                                            <a href='#'>rolin theitar</a>
                                        </div>
                                        <div className="main__left__like__item__category">
                                            <p>drama</p>
                                        </div>
                                    </div>
                                    <div className="main__left__like__item__reaction">
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                                <div className="main__left__like__item">
                                    <div className="main__left__like__item__avatar">
                                        <img src={pages4} alt="" />
                                    </div>
                                    <div className="main__left__like__item__text">
                                        <div className="main__left__like__item__topic">
                                            <a href='#'>active mind</a>
                                        </div>
                                        <div className="main__left__like__item__category">
                                            <p>fitness</p>
                                        </div>
                                    </div>
                                    <div className="main__left__like__item__reaction">
                                        <img src={like} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main__left__news block-shadow block-margin">
                            <div className="main__left__news__title block-title">
                                <p>latest top news</p>
                            </div>
                            <p>NEWS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                        </div>
                    </div>
                    <div className="main__center">
                        <div className="main__center__form block-shadow block-margin">
                        <p>FORM dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                        </div>
                        <div className="main__center__posts">
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                            <div className="main__center__post block-shadow block-margin">
                                <p>POSTS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="main__right">
                        <div className="main__right__notifications block-shadow block-margin">
                            <div className="main__right__notifications__title block-title">
                                <p>recent notifications</p>
                            </div>
                            <p>NOTIFICATIONS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                        </div>
                        <div className="main__right__advertizement block-shadow block-margin">
                            <div className="main__right__advertizement__title block-title">
                                <p>advertizement</p>
                            </div>
                            <p>ADVERTIZEMENT dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                        </div>
                        <div className="main__right__friends block-shadow block-margin">
                            <div className="main__right__friends__title block-title">
                                <p>friends zone</p>
                            </div>
                            <p>FRIENDS dolor sit amet consectetur adipisicing elit. Eaque quam porro nulla nam? Consequatur commodi provident perferendis voluptates earum maxime vero illo libero, dolorum, nisi mollitia blanditiis, odio ea porro.</p>
                        </div>
                    </div>
               </div>
           </div>
       </main> 
    );
}

export default Body;