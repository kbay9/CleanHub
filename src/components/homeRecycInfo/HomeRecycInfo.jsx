import './homeRecycInfo.css'

import cr1 from '../../assets/img/cr1.PNG'
import cr2 from '../../assets/img/cr2.PNG'
import cr3 from '../../assets/img/cr3.PNG'
import cr4 from '../../assets/img/cr4.PNG'
import cr5 from '../../assets/img/cr5.PNG'
import cr6 from '../../assets/img/cr6.PNG'
import cr7 from '../../assets/img/cr7.PNG'

const HomeRecycInfo = () => {
  return (
    <div className='homeRecycInfContainer'>
      <div className='homeRecycInfL'>
        <div className='recycle-cards'>
          <img src={cr1} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>GLASSES</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr2} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>NYLON BAGS</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr3} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>CARTONS</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr4} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>PAPERS</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr5} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>PLASTICS</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr6} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>BATTERIES</p>
        </div>
        <div className='recycle-cards'>
          <img src={cr7} alt='img' className='recycle-cards-img' />
          <p className='recycleP'>CANS</p>
        </div>
        <div className='recycle-circle'>More &gt;&gt;</div>
      </div>
      <div className='homeRecycInfR'>
        <h1 className='homeRecycInfRH'>
          Confused about how to sort or what is recyclable?
        </h1>
        <p className='homeRecycInfRP'>Find out what goes where</p>
      </div>
    </div>
  )
}

export default HomeRecycInfo
