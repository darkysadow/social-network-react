import React from 'react';
import {connect} from 'react-redux';
import { setPosts } from '../../../../redux/home-reducer';
import Posts from './Posts';

import pages1 from "./../../../../img/pages5.jpg"
import pages2 from "./../../../../img/pages6.jpg";
import pages3 from "./../../../../img/pages7.jpg";
import media1 from "./../../../../img/korneplodMem.jpg";

class PostsContainer extends React.Component {
    posts = [
        { id: 1, avatar: pages1, who: 'mc petya', when: '22 minutes ago', text: 'Життя - цікаве. І мотівація то є сильна. Філософія, психологія... Саме головне: залишайтеся людьми, і кричіть шо ви живі. Яяя ЖИИИВИИИИИИИИЙ!!! Яя СИЛЬ-НИИИЙ!!! Я МОТІВА-ТООР!!! Нехай світ почує всі мої текста, голос мій іде вперед, Я пацан з села! Я топовий, Я пацан, ніхто не повірив в мене? передайте від мене таке послання: тепер ми починаєм гутуватися, ми починаєм біти, підготовка в тексті, на вивчати, не буду спати, буду все піднімати, а хто в мене не вірив, я буду на вас кричати. ЗВІІІІІІР!!!!', likes: '228', comments: '14', shares: '88' },
        { id: 2, avatar: pages2, who: 'victor korneplod', when: '25 minutes ago', text: 'Я уже рядом...', media: media1, likes: '22', comments: '1', shares: '23' },
        { id: 3, avatar: pages1, who: 'mc petya', when: '30 minutes ago', text: 'Їм цібулю, захищаюсь від вірусу', likes: '1488', comments: '201', shares: '91' },
        { id: 4, avatar: pages3, who: 'Чистий Сьодня', when: '1 hour ago', text: 'Я не курив, я не употребляв наркотіки зараз. На данний момєнт, я чистий стою перед вами...', media: pages3, likes: '1488', comments: '201', shares: '91' }
    ]

    componentDidMount() {
        this.props.setPosts(this.posts);
    }
    render() {
        return(
            <Posts posts={this.props.posts}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.homePage.posts
    }
}

export default connect(mapStateToProps, {setPosts})(PostsContainer);