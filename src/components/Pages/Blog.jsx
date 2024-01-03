import React from "react";

export const Blog = () => {
  return (
    <div id="page-blog">
      <header className="title-page">
        <h1>Blog</h1>
        <p>
          Check out all the news about Grand Theft Auto
        </p>
      </header>
      <section className="grid-post">
        <article className="card-post">
          <header>
            <img className="img-blog" src="/images/gta-online-2.png" alt="grand theft auto V Online" />
          </header>
          <footer>
            <h3>
              Title Post
            </h3>
            <p>
              Post paragraph
            </p>
          </footer>
        </article>
        <article className="card-post">
          <header>
            <img className="img-blog" src="/images/gta-online-2.png" alt="grand theft auto V Online" />
          </header>
          <footer>
            <h3>
              Title Post
            </h3>
            <p>
              Post paragraph
            </p>
          </footer>
        </article>
        <article className="card-post">
          <header>
            <img className="img-blog" src="/images/gta-online-2.png" alt="grand theft auto V Online" />
          </header>
          <footer>
            <h3>
              Title Post
            </h3>
            <p>
              Post paragraph
            </p>
          </footer>
        </article>
      </section>
    </div>
  );
};
