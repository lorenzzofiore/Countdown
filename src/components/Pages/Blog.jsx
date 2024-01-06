import React from "react";
import GrillaPost from "../GrillaPost";
import GrillaRockstar from "../GrillaRockstar";

export const Blog = () => {
  return (
    <div id="page-blog">
      <header className="title-page">
        <h1>Blog</h1>
        <p>
          Check out all the news about Grand Theft Auto
        </p>
      </header>
      <GrillaPost/>
      <section id="rockstar-games">
        <h2>Explore more games</h2>
        <GrillaRockstar/>
      </section>
    </div>
  );
};
