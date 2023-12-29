import "./Game.css";

export default function Producto ({image, title, console, rate, release_date}) {


    return (
        <div className="producto">
            <img src={image} alt="Grand Theft Auto Cover Art" className="cover-art" />
            <h3 className="product-title">{title}</h3>
            <img src={console} alt="logo consola" className="console-img" />
            <p className="rate"><i class="bi bi-star-fill"></i> {rate}</p>
            <span className="ship">{release_date}</span>
        </div>
    )
}