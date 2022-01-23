import './Form.css'

import { useState } from 'react'

export default function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="form__container">

            <div className="form__container__nav">
                <h3>Zacznij zarabiać w 5 minut</h3>
                <p>Zarejestruj się w minutę i sprawdź, jak to działa</p>
            </div>
            <form onSubmit={handleSubmit} className="form__container-login">
                <label>
                        <input 
                            type="text"
                            onChange={(e) => setEmail(e.target.value) }
                            value={email}
                            required
                            placeholder="Adres e-mail"
                        />
                    </label>
                    <label>
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value) }
                            value={password}
                            required
                            placeholder="Hasło"
                        />
                    </label>
                    <p className="form__container-login-pass-decription">Użyj od 6 do 24 znaków. Nie używaj łatwych sekwencji, np "123456".</p>
                    <button className="form__container-login-btn">Załóż darmowe konto</button>
            </form>
        </div>
    )
}