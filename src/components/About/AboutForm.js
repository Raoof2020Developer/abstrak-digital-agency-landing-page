const AboutForm = () => {
    return (
        <form className="about-form" method="POST" action="/">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="+123 456 78910" />
            </div>

            <a href="/#contact" type="submit" className="about-btn">get free quote</a>

        </form>
    )
}

export default AboutForm