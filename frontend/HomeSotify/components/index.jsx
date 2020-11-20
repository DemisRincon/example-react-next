import React from 'react'
import styles from '../styles/HomeStyles.scss'
const HomeSpotify = () => {

    return (
        <div className={styles.Main}>
            <div className={styles.Header}>
                <img src="/images/logo.png"/>
            </div>
            <div className={styles.Body}>
                <div className={styles.Text}>text area</div>
                <div className={styles.Images}>images</div>
            </div>
        </div>
    )
}

export default HomeSpotify
