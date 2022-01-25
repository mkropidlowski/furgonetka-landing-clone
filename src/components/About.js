import './About.css'
import ilustOne from '../img/illustration-features-partner-01.svg'
import ilustTwo from '../img/illustration-features-partner-02.svg'
import ilustThree from '../img/illustration-features-partner-03.svg'
import ic_exp from '../img/ic-experience-bg.svg'
import ic_rev from '../img/ic-reviews-bg.svg'
import ic_client from '../img/ic-satisfied-clients-bg.svg'
import ic_parcels from '../img/ic-parcels-bg.svg'


export default function Header() {
    return (
        <section className="about">
                <div className="custom-shape-divider-top-1643029172">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                </svg>
                </div>
            <div className="about__details">
                <h2 className="about__header">Co zyskujesz zostając partnerem?</h2>

                <div className="container">
                    <div className="container__box">
                        <img src={ilustOne} alt="Illustration Features Partner" />
                        <h4 className="container__description"> Stała prowizja procentowa <span className="container__description-light"> od każdej dostarczonej przysłki.
                            Zarabiaj nawet 2 zł na przesyłce.</span>
                        </h4>
                    </div>
                    <div className="container__box">
                        <img src={ilustTwo} alt="Illustration Features Partner" />
                        <h4 className="container__description">Prosty przejrzysty program partnerski,  <span className="container__description-light">dzięki któremu wiesz ile zarobisz.</span>
                        </h4>
                    </div>
                    <div className="container__box">
                        <img src={ilustThree} alt="Illustration Features Partner" />
                        <h4 className="container__description"><span className="container__description-light">Raz pozyskany klient, który </span> przynosi Ci stały dochód.</h4>
                    </div>
                </div>


                <div className="statistics">
                    <div className="statistics__box">
                        <img src={ic_exp} alt="ic experience" />
                        <h2 className="statistics__number">9</h2>
                        <h3 className="statistics__desc">lat doświadczenia</h3>
                    </div>
                    <div className="statistics__box">
                        <img src={ic_rev} alt="ic experience" />
                        <h2 className="statistics__number">870 000</h2>
                        <h3 className="statistics__desc">zadowolonych klientów</h3>
                    </div>
                    <div className="statistics__box">
                        <img src={ic_client} alt="ic experience" />
                        <h2 className="statistics__number">55 000</h2>
                        <h3 className="statistics__desc">pozytywnych opinii na Opineo.pl</h3>
                    </div>
                    <div className="statistics__box">
                        <img src={ic_parcels} alt="ic experience" />
                        <h2 className="statistics__number">25 000 000</h2>
                        <h3 className="statistics__desc">nadanych przesyłek</h3>
                    </div>
                </div>

                <div className="join-to">
                    <h1 className="join-to__header">Dołącz do tysięcy partnerów, udostępniających serwis Furgonetka.pl</h1>
                    <button className="join-to__btn">Załóż darmowe konto</button>

                </div>

            </div>
        </section>
    )
}