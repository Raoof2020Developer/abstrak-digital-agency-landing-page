import achievIcon1 from '../../img/icon-7.png'
import achievIcon2 from '../../img/icon-8.png'
import achievIcon3 from '../../img/icon-9.png'
import achievIcon4 from '../../img/apple.png'

const Achievements = () => {
    const achivementsList = [
        {
            id: 1,
            result: 15,
            text: "Years of operation",
            icon: achievIcon1,
        },
        {
            id: 2,
            result: 360,
            text: "Projects deliverd",
            icon: achievIcon2,
        },
        {
            id: 3,
            result: 600,
            text: "Specialist",
            icon: achievIcon3,
        },
        {
            id: 4,
            result: 64,
            text: "Years of operation",
            icon: achievIcon4,
        }
    ]
    return (
        <ul className="achivements-list">
            {
                achivementsList.map(achievement => (
                    <li className="achivement-item" key={achievement.id}>
                        <img src={achievement.icon} alt='' className='achievement-img' />
                        <h3 className='achievement-nbr'>{achievement.result}+</h3>
                        <p className='achievement-text'>{achievement.text}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Achievements