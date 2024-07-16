import './homeHero.css'
import appleImg from '../../assets/img/apple.png'
import wasteBin2 from '../../assets/img/wasteBin2.png'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <div className='homeHeroContainer'>
      <div className='homeHeroL'>
        <h1 className='homeHeroT'>
          RE-USE THE <span className='homeHeroTSpan'>REFUSE</span>
        </h1>
        <p className='homeHeroP'>
          All for the love of a cleaner Lagos and a better environment, let’s
          put the recyclable trash to good use. Become an active trash depositor
          and stand a chance to get a reward or maybe you just want those
          recyclable trash for your business... WE’VE GOT YOU COVERED.
        </p>
        <div className='homeHeroButton'>
          <Link to='/register'>
            <button className='homeHeroGet'>GET STARTED</button>
          </Link>
          <button className='homeheroSign'>
            <Link to='/login'>SIGN IN</Link>
          </button>
        </div>
      </div>
      <div className='homeHeroR'>
        <img src={appleImg} alt='apple background' className='appleImg' />
        <img src={wasteBin2} alt='wasteBin2' className='wasteBin2' />
      </div>
    </div>
  )
}

export default HomeHero
