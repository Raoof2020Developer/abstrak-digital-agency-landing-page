import graphic7 from '../../img/bubble-7.png'
import AboutForm from './AboutForm'

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className='about-left'>
                    <h3 className="about-title">about us</h3>
                    <h2 className="about-subtitle">We do design, code & develop</h2>
                    <p className="about-paragraph">Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque.</p>
                    <p className="about-paragraph">Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim eget libero. </p>
                </div>
                <div className='about-right'>
                    <h2 className='form-header'>Get a free Keystroke quote now</h2>
                    <AboutForm />
                </div>
                <img src={graphic7} className="about-graphic" alt="" />
            </div>

        </section>
    )
}

export default About