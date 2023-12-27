import './GrillaGames.css';
import Games from '../data/games.json'
import Game from './Game';

export default function GrillaGames () {

    return (
        <div className='grilla'>
            {Games.map((producto,index) => (
                <Game 
                    key={index}
                    image = {producto.image}
                    title = {producto.title}
                    new_price = {producto.new_price}
                    free_ship = {producto.free_ship}
                />
            ))}
            
        </div>
    )
}