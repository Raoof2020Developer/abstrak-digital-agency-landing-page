import Story1 from '../../img/blog-1.png'
import Story2 from '../../img/blog-2.png'
const LatestStories = () => {
    const storiesData = [
        {
            id: 1,
            title: 'how to use a remarketing strategy to get more',
            description: 'Demand generation is a constant struggle for any business. Each marketing strategy you employ has generation...',
            img: Story1
        },
        {
            id: 2,
            title: 'SEO statistics you should know in 2021',
            description: 'Organic search has the potential to capture more than 40 percent of your gross revenue Habitasse per feugiat...',
            img: Story2
        }
    ]
    return (
        <div className="latest-stories">
            {storiesData.map(story => (
                <div className='story-card' key={story.id}>
                    <div className='img-wrapper'>
                        <div className='img-div'>
                            <img src={story.img} alt="" className='story-img'/>
                        </div>
                    </div>
                    <div className='story-content'>
                        <h3 className='story-title'>{story.title}</h3>
                        <p className='story-description'>{story.description}</p>
                        <a href="/" className='story-link'>
                            Learn more
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LatestStories