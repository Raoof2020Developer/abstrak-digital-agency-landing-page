import featureImg1 from '../../img/case-study-4.png'

const Features = () => {
    return (
        <section className="features section" id="features">
            <div className="container">
                <div className='left'>
                    <h3 className="features-title">featured case study</h3>
                    <h2 className="features-subtitle">Website and web Development, Design</h2>
                    <p className="features-paragraph">Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.</p>

                    <p className="features-paragraph">Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>

                    <a href="#" className="features-btn">read case study</a>

                    <div className='features-stats'>
                        <div>
                            <h3 className='stats-number'>15%</h3>
                            <p className='stats-desc'>ROI increase</p>
                        </div>

                        <div className='separator-line'></div>

                        <div className='stat'>
                            <h3 className='stats-number'>60k</h3>
                            <p className='stats-desc'>Monthly website visits</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img src={featureImg1} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Features