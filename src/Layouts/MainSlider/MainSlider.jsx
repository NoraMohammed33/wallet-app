import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Slider from 'react-slick';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slide1 from "../../assets/image2.PNG"
import slide2 from "../../assets/image9.PNG"
import slide3 from "../../assets/image7.jpg"


export default function MainSlider() {

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={800}>
                        <img src={slide1} className="d-block w-100 " alt="..." style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval={800}>
                        <img src={slide3} className="d-block w-100" alt="..." style={{ height: '500px' }} />
                    </div>
                    <div className="carousel-item" >
                        <img src={slide2} className="d-block w-100" alt="..." style={{ height: '500px' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
}
