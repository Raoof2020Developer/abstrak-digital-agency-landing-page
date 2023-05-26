import chatGroup from '../../img/chat-group.png'
import laptopPoses from '../../img/laptop-poses.png'
import window from '../../img/window.png'
import graphic2 from '../../img/bubble-38.png'

const Hero = () => {
    return (
        <section className="hero section" id="hero">
            <div className="container">
                <div className="hero-left">
                    <h1 className="hero-title">Build beautiful website & mobile apps.</h1>
                    <p className="hero-description"> Create live segments and target the right people for messages based on their behaviors. </p>
                    <a href="/#contact" className="hero-btn">Get Started</a>
                </div>
                <div className="hero-right">
                    <img src={window} alt="window illustration 3d" />
                    <img src={laptopPoses} alt="laptop poses illustration 3d" />
                    <img src={chatGroup} alt="chat group illustration 3d" />
                </div>
                <img src={graphic2} alt="" className='graphic2' />
            </div>
        </section>
    )
}

export default Hero