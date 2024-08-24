'use client'

import React, { useState, useEffect } from 'react'
import styles from './Products.module.css'
import Filter from '../Filters/Filter';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }


    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.sort}>
                <div className={styles.show}>
                    <p>{products.length} ITEMS</p>
                    {
                        isFilterVisible ?
                            <p onClick={() => setIsFilterVisible(false)}>
                                <img src="/assets/hide.png" alt="hide" />{' '}HIDE FILTER
                            </p> : <p onClick={() => setIsFilterVisible(true)}     >
                                <img src="/assets/show.png" alt="show" />{' '}SHOW FILTER
                            </p>
                    }
                    <p>FILTER</p>
                </div>

                <select name="filter">
                    {
                        ['Recommended', 'Newest First', 'Popular', 'Price: High to Low', 'Price: Low to High'].map((item, i) => (
                            <option value={item} key={i}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className={styles.bottom}>
                {isFilterVisible && <div className={styles.filters}>
                    <Filter />
                </div>}
                <div className={isFilterVisible ? styles.products_show : styles.products_hide}>
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products