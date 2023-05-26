import logo1 from '../../img/yelp-2.png'
import logo2 from '../../img/google-2.png'
import logo3 from '../../img/fb-2.png'
import userImg1 from '../../img/testimonial-1.png'
import userImg2 from '../../img/testimonial-2.png'
import userImg3 from '../../img/testimonial-3.png'

const TestimonialCards = () => {
    const testimonialsList = [
        {
            id: 1,
            companyLogo: logo1,
            text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
            userImg: userImg1,
            userName: "Darrell Steward",
            userJob: "Executive Chairman" 
        },
        {
            id: 2,
            companyLogo: logo2,
            text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
            userImg: userImg2,
            userName: "Savannah Nguyen",
            userJob: "Executive Chairman" 
        },
        {
            id: 3,
            companyLogo: logo3,
            text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
            userImg: userImg3,
            userName: "Floyd Miles",
            userJob: "Executive Chairman" 
        },
    ]
    return (
        <ul className="testimonials-list">
            {testimonialsList.map(testimonial => (
                <li className='testimonial-item' key={testimonial.id}>
                    <img src={testimonial.companyLogo} className="company-logo"/>
                    <p className='testimonial-text'><q>{testimonial.text}</q></p>

                    <div className='user-data'>
                        <img src={testimonial.userImg} alt="" className='user-img'/>
                        <div className='user-info'>
                            <h3 className='username'>{testimonial.userName}</h3>
                            <p className='user-job'>{testimonial.userJob}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TestimonialCards