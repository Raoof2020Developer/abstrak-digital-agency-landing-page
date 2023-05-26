import Illust1 from '../../img/laptop-poses-2.png'
import Illust2 from '../../img/chat-group-2.png'
import Illust3 from '../../img/bill-pay.png'
import graphic1 from '../../img/bubble-12.png'
import graphic2 from '../../img/bubble-16.png'
import graphic3 from '../../img/bubble-13.png'
import graphic4 from '../../img/bubble-14.png'
import graphic5 from '../../img/bubble-15.png'

const Estimate = () => {
  return (
    <section className="section estimate" id="estimate">
        <div className="container">
            <h3 className="estimate-title">Let's work together</h3>
            <h2 className="estimate-subtitle">Need a successful project?</h2>
            <a href="https://www.example.com" className="estimate-btn">estimate project</a>

            <div className="estimate-illustrations">
                <img src={Illust1} alt="" className='estimate-illustration' />
                <img src={Illust2} alt="" className='estimate-illustration' />
                <img src={Illust3} alt="" className='estimate-illustration' />
            </div>
            <hr/>
            <ul className='graphics'>
              <img src={graphic1} alt="" className='graphic graphic1'/>
              <img src={graphic2} alt="" className='graphic graphic2'/>
              <img src={graphic3} alt="" className='graphic graphic3'/>
              <img src={graphic4} alt="" className='graphic graphic4'/>
              <img src={graphic2} alt="" className='graphic graphic5'/>
              <img src={graphic5} alt="" className='graphic graphic6'/>
              <img src={graphic2} alt="" className='graphic graphic7'/>
            </ul>
        </div>
            
    </section>
  )
}

export default Estimate