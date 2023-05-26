import Project1 from '../../img/project-1.png'
import Project2 from '../../img/project-2.png'
import Project3 from '../../img/project-3.png'
import Project4 from '../../img/project-4.png'
import Project5 from '../../img/project-5.png'
import Project6 from '../../img/project-6.png'

const Projects = () => {
    const projectsList = [
        {
            id: 1,
            title: "E-books store",
            description: "A simple store to sell ebooks using Laravel PHP.",
            image: Project1
        },

        {
            id: 2,
            title: "Instagram Like Clone",
            description: "A clone like instagram using Laravel PHP and Livewire.",
            image: Project2
        },

        {
            id: 3,
            title: "Restful API",
            description: "A restful API for users/lessons/tags that you may use in your application using Laravel PHP.",
            image: Project3
        },

        {
            id: 4,
            title: "E-books store",
            description: "A simple store to sell ebooks using Laravel PHP and MySQL.",
            image: Project4
        },

        {
            id: 5,
            title: "E-books store",
            description: "A simple store to sell ebooks using Laravel PHP and MySQL.",
            image: Project5
        },

        {
            id: 6,
            title: "E-books store",
            description: "A simple store to sell ebooks using Laravel PHP and MySQL.",
            image: Project6
        }
    ].map(project => (
        <li className='project' key={project.id}>
            <div className='image-wrapper'>
                <img className='project-img' src={project.image} alt="" />
            </div>
            <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
            </div>
        </li>
    ))
    return (
        <div className="projects">
            {projectsList}
        </div>
    )
}

export default Projects