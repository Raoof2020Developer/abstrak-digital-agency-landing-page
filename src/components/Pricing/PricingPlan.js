
const PricingPlan = () => {
    // const pricingData = [
    //     {
    //         id: 1,
    //         plan: 'professional',
    //         text: 'a beatiful, simple website',
    //         price: 119.99,
    //         benefits: [10, 5, 10, 5, 2]
    //     },
    //     {
    //         id: 2,
    //         plan: 'standard',
    //         text: 'small team',
    //         price: 219.99,
    //         benefits: [50, 20, 500, 20, 10]
    //     },
    //     {   
    //         id: 3,
    //         plan: 'ultimate',
    //         text: 'big company',
    //         price: 319.99,
    //         benefits: [200, 'unlimited', 'unlimited', 'unlimited', 'unlimited']
    //     }
    // ]
    return (
        <>
        <div className='buttons-box'>
            <button className='active'>billed yearly</button>
           <button>billed monthly</button>
        </div>

        <div className="pricing-cards">
            <div className="pricing-card">
                <h3 className="plan-title">Professional</h3>
                <p className="plan-subtitle">A beautiful, simple website </p>

                <hr/>

                <h2 className="price">$119.99 <span> / yearly</span></h2>
                <a href="/" className="plan-btn">Get Started Today</a>

                <ul className="plan-features">
                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        10 Pages Responsive Website
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        5 PPC Campaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        10 SEO Keywords
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        5 Facebook Camplaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        2 Video Camplaigns
                    </li>
                </ul>

            </div>
            <div className="pricing-card">
                <h3 className="plan-title">Standard</h3>
                <p className="plan-subtitle">Small Team</p>

                <hr/>

                <h2 className="price">$219.99 <span> / yearly</span></h2>
                <a href="/" className="plan-btn">Get Started Today</a>

                <ul className="plan-features">
                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        20 Pages Responsive Website
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        20 PPC Campaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        100 SEO Keywords
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        10 Facebook Camplaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        10 Video Camplaigns
                    </li>
                </ul>

            </div>
            <div className="pricing-card">
                <h3 className="plan-title">Ultimate</h3>
                <p className="plan-subtitle">big Company</p>

                <hr/>

                <h2 className="price">$599.99 <span> / yearly</span></h2>
                <a href="/" className="plan-btn">Get Started Today</a>

                <ul className="plan-features">
                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        100 Pages Responsive Website
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        Unlimited PPC Campaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        Unlimited SEO Keywords
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        Unlimited Facebook Camplaigns
                    </li>

                    <li className="plan-feature">
                        <i className="fa-solid fa-check"></i>
                        Unlimited Video Camplaigns
                    </li>
                </ul>

            </div>
        </div>
        </>
  )
}

export default PricingPlan