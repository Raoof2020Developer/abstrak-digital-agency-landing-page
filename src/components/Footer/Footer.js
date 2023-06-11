import message from '../../img/message.png'
const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="container">
            <div className="companies-logos">
              <ul>
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-vimeo-v"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-dribbble"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa-brands fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-sections">
              <div className="col-1">
                <h2>Get in touch!</h2>
                <p className="">Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>

                <div className="email-marketing">
                  <img src={message} alt="" />
                  <input type="email" placeholder="Email Address" className="email-input"/>
                  <button type="submit" className="email-btn">subscribe</button>
                </div>
              </div>
              <div className='divider'></div>
              <div className="col-2">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="">
                    Logo & Branding
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Website Development
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Mobile App Development
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Search Engine Optimization
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Pay-Per-Click
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Social Media Marketing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
              <h3>Resourses</h3>
                <ul>
                  <li>
                    <a href="">
                    Blog
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Case Studies
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-4'>
                <h3>Support</h3>
                <ul>
                  <li>
                    <a href="">
                    Contact
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="">
                    Terms of Use
                    </a>
                  </li>
                </ul>
              </div>


            </div>
              <div className='line-divider'></div>
              <div className='copyright'>
                <div className='right'>
                  © 2022. All rights reserved by <a href=''>Axilthemes</a>.
                </div>
                <div className='left'>
                  <a href="">Privacy Policy</a>
                  <i class="fa-solid fa-circle"></i>
                  <a href="">Terms Of Use</a>
                </div>
              </div>
        </div>
    </footer>
  )
}

export default Footer