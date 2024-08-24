import React from 'react'
import styles from './Filter.module.css'

const Filter = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input type="checkbox" /><span>CUSTOMIZABLE</span>
      </div>
      {
        ['Ideal for', 'occasion', 'work', 'fabric', 'segment', 'suitable for', 'raw material', 'pattern'].map((filter, i) => (
          <div key={i} className={styles.filter}>
            <select name={filter}>
              <option value={filter}>{filter}</option>
            </select>
            <p>All</p>
          </div>
        ))
      }
    </aside>
  )
}

export default Filter