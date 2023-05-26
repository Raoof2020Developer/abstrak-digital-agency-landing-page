const Nav = () => {
    return (
        <nav className="nav-menu">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/" className="nav-link">home</a>
                </li>

                <li className="nav-item">
                    <a href="/#services" className="nav-link">services</a>
                </li>

                <li className="nav-item">
                    <a href="/#case_study" className="nav-link">case study</a>
                </li>

                <li className="nav-item">
                    <a href="/#portfolio" className="nav-link">portfolio</a>
                </li>

                <li className="nav-item">
                    <a href="/#pricing" className="nav-link">pricing</a>
                </li>

                <li className="nav-item">
                    <a href="/#blog" className="nav-link">blog</a>
                </li>
            </ul>

            <a href="/#contact" className="nav-btn">let's talk</a>
        </nav>
    )
}

export default Nav