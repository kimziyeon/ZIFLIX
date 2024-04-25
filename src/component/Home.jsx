import React from 'react';
import {HashRouter,Routes,Route,Link} from "react-router-dom";
import { useStore } from '../store';
import react, { useEffect } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



function Home(props) {

    const { popular, getMovie, thumb, title, back, getDetail} = useStore();

    useEffect(() => {
        getMovie('popular')
    }, [])

    if (!popular.length) return <>준비중</>;

    return (
    <>
        <header>
            <h1>ZI-FLIX</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Movies</Link>
                <Link to="/">TV Series</Link>
            </div>
        </header>

        <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} className="mySwiper">
            {
            popular.map((obj) => (
                <SwiperSlide>
                <div className='back' style={{background:`url(${back + obj.backdrop_path}) 0 0 / cover no-repeat`}}>
                

                    <div className='main'>
                        <div>
                        <h2>{obj.title}</h2>
                        <h3>{obj.overview}</h3>
                            <p className='button'>
                            <Link to={`/Detail/${obj.id}`}>Watch now</Link>
                            <Link to='/'>Watch trailer</Link>
                            </p>
                        </div>

                        <p><img src={thumb + obj.poster_path}/></p>
                    </div>

                </div>

                </SwiperSlide>
            ))
            }
        </Swiper>
    </>
    );
}

export default Home;