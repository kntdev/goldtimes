import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>

            <div className={styles.titulo}>
                <h1>Logo<span className={styles.red}>CS1.6</span></h1>
            </div>

            <nav className='navbar'>
                <ul className={styles.items}>
                    <li className='item'><a href="#">Home</a></li>
                    <li className='item'><a href="#">Tools</a></li>
                    <li className='item'><a href="#">Settings</a></li>
                </ul>
            </nav>
        
    </header>
  )
}

export default Header