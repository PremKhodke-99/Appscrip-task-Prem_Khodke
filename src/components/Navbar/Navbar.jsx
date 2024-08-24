import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.topPortion}>
        <div className={styles.left}>
          <img src={'/assets/menu.png'} alt="menu" className={styles.logopic}/>
          <img src={'/assets/Logo.png'} alt="logo" className={styles.logopic} />
        </div>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.profile}>
          <img src={'/assets/search-normal.png'} alt="search" className={styles.profilelogo} />
          <img src={'/assets/heart.png'} alt="heart" className={styles.profilelogo} />
          <img src={'/assets/shopping-bag.png'} alt="bag" className={styles.profilelogo} />
          <img src={'/assets/profile.png'} alt="profile" className={styles.profilelogo} />
          <select name="language" id="language">
            <option value="eng">ENG</option>
          </select>
        </div>
      </div>
      <div className={styles.navlinks}>
        {
          ['shop', 'skills', 'stories', 'about', 'contact us'].map((nav, i) => (
            <h3 key={i}>{nav}</h3>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar