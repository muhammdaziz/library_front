import React from 'react';

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './main.css'
import BookCard from "../book-card";

const CustomOwlCarousel = ({openModal}) => {

    //Owl Carousel Settings
    const options = {
        margin: 30,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        // navText: ["<", ">"],
        smartSpeed: 1000,
        items: 1,
        navText:["<div className='nav-btn prev-slide'><</div>","<div className='nav-btn next-slide'>></div>"],
        slideBy: 1,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        },
    };


     return (
         <OwlCarousel style={{height: 'fit-content'}} className="slider-items owl-carousel" {...options}>
             <BookCard openModal={openModal} className={'item'}/>
             <BookCard openModal={openModal} className={'item'}/>
             <BookCard openModal={openModal} className={'item'}/>
             <BookCard openModal={openModal} className={'item'}/>
         </OwlCarousel>
     )
}

export default CustomOwlCarousel;