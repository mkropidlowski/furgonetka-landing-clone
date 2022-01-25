import logo from '../img/furgonetka_pl_logo.png'
import Form from './Form'
import './Header.css'
import { useState } from 'react';



export default function Header() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    return (
        <header className="homepage__header">
            <div className="homepage__gradient"> 
                <div className="homepage__logo-box">
                    <img src={logo} alt="logo" className="homepage__logo-box__img"/>
                    <h2>Zarejestruj się i zostań naszym partnerem VIP</h2>
                    <h3>Przesyłki dla Twoich klientów juz od 8 zł</h3>
                    <h3 className="homepage__logo-box-text">Udostępnij najlepszą ofertę na rynku i dodatkowo zarabiaj</h3>
                </div> 
                <Form submitForm={submitForm}/> 
             
            </div>
        </header>
    )
}
