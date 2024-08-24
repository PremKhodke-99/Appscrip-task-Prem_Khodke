import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.section}>
                <p>HOME</p>{' '}<p>SHOP</p>
            </div>
            <div className={styles.text}>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </section>
    )
}

export default Hero