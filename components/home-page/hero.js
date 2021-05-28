import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/serg_profile-ateam.png" alt="serg image" width={400} height={400}/>
        </div>
        <h1>Hi, I'm Serg</h1>
        <p>
            I like to write about full stack development and other news. Also, I love to keep everyone updated with the latest tips or tech events that may interest developers.
        </p>
            
        </section>
    )
}

export default Hero
