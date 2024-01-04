import './Post.css'

export default function Post ({image, title, type}) {
    return (
        <article className="card-post">
            <header>
                <img className="img-blog" src={image} alt="grand theft auto V Online" />
            </header>
            <footer>
                <h3>
                    {title}
                </h3>
                <p>
                    {type}
                </p>
            </footer>
        </article>
    )
}