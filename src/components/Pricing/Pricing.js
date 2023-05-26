// import line1 from '../../img/line-1.png'
// import bubble4 from '../../img/bubble-4.png'
import PricingPlan from './PricingPlan'

const Pricing = () => {
  return (
    <section className="section pricing" id="pricing">
        <div className="container">
            <h3 className="pricing-title">pricing plan</h3>
            <h2 className="pricing-subtitle">find the right plan.</h2>
            <p className='pricing-text'>Flexible pricing options for freelancers and design teams.</p>

            <PricingPlan />

        </div>
            {/* <img src={line1} alt="" className='pricing__line'/>
            <img src={bubble4} alt="" className='pricing__graphic'/> */}
    </section>
  )
}

export default Pricing