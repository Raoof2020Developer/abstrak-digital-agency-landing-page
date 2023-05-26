import brand1 from '../../img/brand-1.png'
import brand2 from '../../img/brand-2.png'
import brand3 from '../../img/brand-3.png'
import brand4 from '../../img/brand-4.png'
import brand5 from '../../img/brand-5.png'
import brand6 from '../../img/brand-6.png'
import brand7 from '../../img/brand-7.png'
import brand8 from '../../img/brand-8.png'

const BrandsList = () => {
  const brandsData = [
    {
      id: 1,
      img: brand1
    },
    {
      id: 2,
      img: brand2
    },
    {
      id: 3,
      img: brand3
    },
    {
      id: 4,
      img: brand4
    },
    {
      id: 5,
      img: brand5
    },
    {
      id: 6,
      img: brand6
    },
    {
      id: 7,
      img: brand7
    },
    {
      id: 8,
      img: brand8
    },
  ]
  return (
    <ul className="brands-list">
        {brandsData.map(brand => (
          <li className='brand-item' key={brand.id}>
            <img src={brand.img} alt="" />
          </li>
        ))}
    </ul>
  )
}

export default BrandsList