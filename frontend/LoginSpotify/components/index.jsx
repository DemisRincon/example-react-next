import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.scss'
import axios from 'axios'
const LoginComponent = () => {

    const [credential, setCredential] = useState({
        user: "",
        password: ""
    })

    const [pokemonData, setPokemonData] = useState()

    const [variable, setVariable] = useState(3213)

    useEffect(async () => {
        const dataGot = await getData()

        setPokemonData(dataGot)
    }, [])

    const getData = () => {
        const data = axios({
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu'
        }).then(response => {
            return response
        });
        return data
    }




    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = ({ target: { value, name } }) => {

        setCredential(credential => ({
            ...credential,
            [name]: value

        }))

    }
    console.log("datos obtenidos", pokemonData);
    return (
        <div className={styles.Main}>
            <form onSubmit={handleSubmit}>
                <div className={styles.LogoContainer}>
                    <img src="/images/logog.png" alt="" />
                </div>
                <div className={styles.BodyContainer}>
                    <div className={styles.InputContainer}>
                        <input name="user" onChange={handleChange} placeholder="Usuario" type="text" />
                    </div>
                    <div className={styles.InputContainer}>
                        <input name="password" onChange={handleChange} placeholder="Contraseña" type="password" />
                    </div>
                    <div className={styles.InputContainer}>
                        <button type="submit">
                            Ingresar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent
