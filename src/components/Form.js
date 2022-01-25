import './Form.css'
import hidden from '../img/hidden.png'
import { useState } from 'react'
import useForm  from './useForm'
import validate from './ValidateForm';


export default function Form( {submitForm}) {

    const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {

    setPasswordShown(!passwordShown);
  };

  
    return (
        <div className="form__container">
            <div className="form__nav">
                <h3>Zacznij zarabiać w 5 minut</h3>
                <p className="form__register-info">Zarejestruj się w minutę i sprawdź, jak to działa</p>
            </div>
            
            <form onSubmit={handleSubmit} className="form__login" noValidate>
                <label>
                        <input 
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            placeholder="Adres e-mail"
                        />
                        
                    </label>
                    <h5 className="form__error">{errors.email && <p>{errors.email}</p>}</h5>
                    <label>
                        <input 
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required
                            placeholder="Hasło"
                            className="form__input-password"
                        />
                        <img 
                            src={hidden} 
                            alt="hidden eye" 
                            className="form__hidden-eye" 
                            onClick={togglePassword}
                        />
                    </label>
                    <h5 className="form__error">{errors.password && <p>{errors.password}</p>}</h5>
                    <p className="form__login-pass-decription">Użyj od 6 do 24 znaków. Nie używaj łatwych sekwencji, np "123456".</p>
                    <button className="form__login-btn" type="submit">Załóż darmowe konto</button>
            </form>
        </div>
    )
}