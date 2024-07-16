import './homeIntro.css'
import circle from '../../assets/img/cycle.png'

const HomeIntro = () => {
  return (
    <div className='homeIntroContainer'>
      <div className='homeIntroL'>
        <img src={circle} alt='homeIntroLImg' className='homeIntroLImg' />
      </div>
      <div className='homeIntroR'>
        <div className='homeIntroH2'>WHO WE ARE</div>
        <div className='homeIntroH1'>
          Yes, we believe in a cleaner and healthy LAGOS!
        </div>
        <div className='homeIntroP'>
          We provide end-to-end waste management services based on the
          principles of circular economy. We handle waste sustainably &
          responsibly for Lagosian, tech parks, residential communities and
          other bulk generating organizations and institutions. Are you a bulk
          waste generator? Connect with us to ensure that your brand becomes
          zero waste to landfill.
        </div>
        <button className='homeIntroBtn'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default HomeIntro
