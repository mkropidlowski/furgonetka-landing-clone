import gradientLeft from '../img/gradient_left.png'
import gradientRight from '../img/gradient_right.png'
import './Header.css'



export default function Header() {
    return (
        <div className="header">
            <div className="header__gradient">
                <div className="header__gradient__left">
                    {/* <img src={gradientLeft} alt="gradient left" className="header__gradient__img"/>      */}
                </div>
                <div className="header__gradient__right">
                    {/* <img src={gradientRight} alt="gradient right" className="header__gradient__img"/>   */}
                </div>
            </div>
        </div>
    )
}
