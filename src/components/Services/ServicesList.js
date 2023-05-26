import icon1 from '../../img/icon-1.png'
import icon2 from '../../img/icon-2.png'
import icon3 from '../../img/icon-3.png'
import icon4 from '../../img/icon-4.png'
import icon5 from '../../img/icon-5.png'
import icon6 from '../../img/icon-6.png'

const ServicesList = () => {
    const servicesData = [
        {
            id: 1, 
            serviceName: "Design",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon1
        },
        {
            id: 2, 
            serviceName: "Development",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon2
        },
        {
            id: 3, 
            serviceName: "Online marketing",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon3
        },
        {
            id: 4, 
            serviceName: "Business",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon4
        },
        {
            id: 5, 
            serviceName: "Technology",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon5
        },
        {
            id: 6, 
            serviceName: "Content strategy",
            serviceDesc: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
            serviceIcon: icon6
        }
    ]
    const servicesList = servicesData.map(service => (
        <li key={service.id} className="service-item">
            <img src={service.serviceIcon} alt="" className='service-icon'/>
            <div className='service-details'>
                <h3>{service.serviceName}</h3>
                <p>{service.serviceDesc}</p>
            </div>
        </li>
    ))

    return (
        <ul className='services-list'>
            {servicesList}
        </ul>
    )
}

export default ServicesList