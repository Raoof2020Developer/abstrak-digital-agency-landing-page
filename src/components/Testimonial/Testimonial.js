import TestimonialCards from "./TestimonialCards"

const Testimonial = () => { 
    return (
        <section className="section testimonial" id="testimonial">
            <div className="container">
                    <h3 className="testimonial-title">Testimonial</h3>
                    <h2 className="testimonial-subtitle">From getting started</h2>
                    <p className="testimonial-paragraph">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>

                    <TestimonialCards />
            </div>
        </section>
    )
}

export default Testimonial