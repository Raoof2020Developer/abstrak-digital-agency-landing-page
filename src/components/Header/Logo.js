import logo from '../../img/logo.svg'

const Logo = () => {
    return (
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default Logo