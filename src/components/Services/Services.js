import line from '../../img/line-9.png'
import ServicesList from './ServicesList'
import graphic3 from '../../img/bubble-42.png'

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">
                <h3 className="services-title">What We Can Do For You</h3>
                <h2 className="services-subtitle">Services we can help you with</h2>
                <p className="services-paragraph">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>

                <ServicesList />
            </div>
            <img src={line} alt="line cursive" className='services-line'/>
            <img src={graphic3} alt="" className='services-graphic'/>
        </section>
    )
}

export default Services