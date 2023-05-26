import Achievements from "./Achievements"

const CaseStudy = () => {
    return (
        <section className="section case_study" id="case_study">
            <div className="container">
                <h3 className="case_study-title">featured case study</h3>
                <h2 className="case_study-subtitle">Design startup movement</h2>
                <p className="case_study-text">In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>

                <Achievements />
            </div>
        </section>
    )
}

export default CaseStudy