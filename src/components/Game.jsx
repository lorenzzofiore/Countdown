import "./Game.css";

export default function Producto ({image, title, rate, release_date}) {


    return (
        <div className="producto">
            <img src={image} alt="" />
            <h3 className="product-title">{title}</h3>
            <p className="rate"><i class="bi bi-star-fill"></i> {rate}</p>
            <span className="ship">{release_date}</span>
        </div>
    )
}