import Logo from "./Logo"
import Nav from "./Nav"
import graphic1 from '../../img/bubble-39.png'

const Header = () => {
    // window.addEventListener('scroll', () => {
    //     console.log(window.scrollY)
    // })
    return (
        <>
            <header className="header" id="header" /* style={{
                            boxShadow: '0 2px 1rem .2rem rgba(0, 0, 0 ,.1)'}} */ >
                <div className="container">
                    <Logo />
                    <Nav />
                    <img 
                        src={graphic1} 
                        alt="" 
                        className="graphic1" 
                    />
                </div>
            </header>
        </>
    )
}

export default Header