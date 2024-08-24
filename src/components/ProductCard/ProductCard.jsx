import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
    return (
        <div className={styles.wrapper}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <div>
                <p>Sign in or Create an account to see pricing</p>
                <img src="/assets/heart.png" alt="wishlist" />
            </div>
        </div>
    )
}

export default ProductCard