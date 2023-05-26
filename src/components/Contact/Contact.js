
const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <div className="container">
            <div className="left">
              <h3 className="contact-title">Need a designer? </h3>
              <h2 className="contact-subtitle">Let’s work together</h2>

              <ul className="contact-info">
                <li>
                  <h3 className="info-title">Mail</h3>
                  <p className="info-value">
                    <a href="#" className="info-link">example@gmail.com</a>
                  </p>
                </li>

                <li>
                  <h3 className="info-title">Address</h3>
                  <p className="info-value">
                    <a href="#" className="info-link">Warnwe Park Streetperrine, FL 33157 New York City</a>
                  </p>
                </li>

                <li>
                  <h3 className="info-title">Phone</h3>
                  <p className="info-value">
                    <a href="#" className="info-link">+0123456789</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <h3 className="form-title">
              Describe your project
              </h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input type="text" id="name" name="name" placeholder="John Smith" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" name="email" placeholder="example@gmail.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea id="message" name="message"></textarea>
                </div>
                <div className="form-group" style={ {
                  display: 'flex', 
                  flexDirection: 'row-reverse'
                }}>
                  <button type="submit" className="contact-btn">send</button>
                </div>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Contact

{/* <div className="left">
              <h3 className="contact-title">Need a designer? </h3>
              <h2 className="contact-subtitle">Let’s work together</h2>

              <div className="contact-info"> 
                <ul>
                  <li>
                    <h3 className="info-title">mail</h3>
                    <p>
                      <a href="https://www.example.com">example@gmail.com</a>
                    </p>
                  </li>

                  <li>
                    <h3 className="info-title">address</h3>
                    <p>
                      <a href="https://www.example.com">Warnwe Park Streetperrine, FL 33157 New York City</a> 
                    </p>
                  </li>

                  <li>
                    <h3 className="info-title">phone</h3>
                    <p>
                      <a href="https://www.example.com">+0123456789</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right">
              <h3 className="form-title">Describe your project</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input type="text" id="name" name="name" placeholder="John Smith" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" name="email" placeholder="example@gmail.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea className="contact-message" id="message"></textarea>
                </div>

                <button className="submit-contact" type="submit">send</button>
              </form>
            </div> */}