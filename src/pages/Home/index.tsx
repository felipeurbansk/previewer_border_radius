import React, {useState} from 'react';

import Box from '../../components/Box';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

const Home = () => {
    const [top, setTop] = useState('0');
    const [right, setRight] = useState('0');
    const [bottom, setBottom] = useState('0');
    const [left, setLeft] = useState('0');

    return (
        <div className="home-content">
            <Header/>
            <main>
                <div className="controllers-radius">
                    <input className="slider-top" type="range" min="1" max="100" value={top} onChange={ (e) => { setTop(e.target.value); } } />
                    <input className="slider-right" type="range" min="1" max="100" value={right} onChange={ (e) => { setRight(e.target.value); } } />

                    <Box top={top} right={right} bottom={bottom} left={left} />

                    <input className="slider-bottom" type="range" min="1" max="100" value={bottom} onChange={ (e) => { setBottom(e.target.value); } } />
                    <input className="slider-left" type="range" min="1" max="100" value={left} onChange={ (e) => { setLeft(e.target.value); } } />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;