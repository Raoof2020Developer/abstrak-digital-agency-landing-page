import Projects from "./Projects"

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <h3 className="portfolio-title">Our Project</h3>
                <h2 className="portfolio-subtitle">Some of our finest work.</h2>

                <div className="portfolio-projects">
                    <ul className="filter-links">
                        <li className="filter-link active">all works</li>
                        <li className="filter-link">branding</li>
                        <li className="filter-link">mobile</li>
                    </ul>
                    <Projects />
                </div>
            </div>
        </section>

    )
}

export default Portfolio