import BrandsList from "./BrandsList"

const Clients = () => {
  return (
    <section className="clients section" id='clients'>
        <div className='container'>
            <h3 className="clients-title"> Top Clients </h3>
            <h2 className="clients-subtitle">We’ve built solutions for...</h2>
            <p className="clients-paragraph">Design anything from simple icons to fully featured websites and applications</p>

            <BrandsList />
        </div>
    </section>
  )
}

export default Clients