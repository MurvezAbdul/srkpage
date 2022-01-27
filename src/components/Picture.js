import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Picture extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50HthPXKqBuutd711Q_ekwhObA0NGq87YVA&usqp=CAU" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50HthPXKqBuutd711Q_ekwhObA0NGq87YVA&usqp=CAU" />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50HthPXKqBuutd711Q_ekwhObA0NGq87YVA&usqp=CAU" width="10%"/>
                    
                </div>
            </Carousel>
        );
    }
};
