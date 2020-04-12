import React from 'react';
import p1 from '../p1.jpg';
import p2 from '../p2.jpg';
import p3 from '../p3.jpg';
import p4 from '../p4.jpg';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Home=() =>(
    <div className='container' style={{marginTop:"80px"}}>
        <div className='center-align white-text'>
            <h2>Hungry ?? Look no further than <strong>Crave Better</strong></h2>
        </div>
        <Carousel autoPlay={2000} animationSpeed={1000} infinite>
            <img src={p1} alt="food" height="500" width="800"/>
            <img src={p2} alt="food" height="500" width="800"/>
            <img src={p3} alt="food" height="500" width="800"/>
            <img src={p4} alt="food" height="500" width="800"/>
        </Carousel>
    </div>
)

export default Home;