import React, { useState } from 'react'
import styles from '../styles/Layout.scss'

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handelOpen = () => { setIsOpen(!isOpen) }

    return (
        <div className={styles.Main}>
            <div className={styles.Header}>
                <div className={styles.LogoContainer}>
                    <img src="/images/f.svg" alt="" />
                </div>
                <div className={styles.UserContainer}>
                    user
                </div>
            </div>
            <div className={styles.Body}>
                <div className={`${styles.NavBar} ${isOpen ? styles.NavBarOpen : ""}`}>
                    <button onClick={handelOpen}>
                        {isOpen ? "C" : "O"}
                    </button>
                </div>
                <div className={`${styles.Container} ${isOpen ? styles.ContainerOpen : ""}`}>
                    <div className={styles.HeaderContainer}>
                        HEADER
                    </div>
                    <div className={styles.BodyContainer}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
