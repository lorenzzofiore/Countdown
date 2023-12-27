import React, { useRef, useState } from 'react';
import './GrillaGames.css';
import Games from '../data/games.json';
import Game from './Game';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'; 
import 'swiper/css/free-mode';
import 'swiper/css'; 
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export default function GrillaProductos() {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            mousewheel={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}    
            pagination={{
            clickable: true,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            loop
            breakpoints={{
                // Configuración para diferentes tamaños de pantalla
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
                    new_price={game.new_price}
                    free_ship={game.free_ship}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    );
}
