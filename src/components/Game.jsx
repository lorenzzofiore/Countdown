import "./Game.css";

export default function Producto ({image, title, new_price, free_ship}) {


    return (
        <div className="producto">
            <img src={image} alt="" />
            <h3 className="product-title">{title}</h3>
            <p className="price"><i class="bi bi-star-fill"></i> {new_price}</p>
            <span className="ship">{free_ship}</span>
        </div>
    )
}