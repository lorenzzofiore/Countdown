
import './GrillaGames.css';
import Games from '../data/games.json';
import Game from './Game';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'; 

import 'swiper/css'; 
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';


export default function GrillaProductos() {
    const handleMouseEnter = (swiper) => {
        swiper.autoplay.stop();
    };
    
    const handleMouseLeave = (swiper) => {
        swiper.autoplay.start();
    };
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            mousewheel={true}
            pagination={{
            clickable: true,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            loop={true}
            effect='slide'
            speed={2000}
            autoplay={{
                delay: 1000,
                disableOnHover: true,
            }}
            on={{
                mouseenter: handleMouseEnter,
                mouseleave: handleMouseLeave,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >
            {Games.map((game, index) => (
            <SwiperSlide className='swiper-games' key={index}>
                <Game
                    image={game.image}
                    title={game.title}
                    rate={game.rate}
                    release_date={game.release_date}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    );
}
