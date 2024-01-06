import './GrillaRockstar.css'

export default function GrillaRockstar() {
    return (
        <>
            <section className='grilla-rockstar'>
                <article>
                    <img src="/images/gtav.webp" alt="" />
                </article>
                <article>
                    <img src="/images/gta-online.webp" alt="" />
                </article>
                <article>
                    <img src="/images/reddead2.webp" alt="" />
                </article>
                <article>
                    <img src="/images/reddeadonline.webp" alt="" />
                </article>
            </section>
            <div className='btn-view'>
                <a href='https://www.rockstargames.com/games' target="_blank" rel="noreferrer">View more</a>
            </div>
        </>
    );
}