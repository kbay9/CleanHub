import './home.css'
import HomeHero from '../../components/homeHero/HomeHero'
import HomeIntro from '../../components/homeIntro/HomeIntro'
import HomeRecycling from '../../components/homeRecycling/HomeRecycling'
import HomeRecycInfo from '../../components/homeRecycInfo/HomeRecycInfo'
import Partners from '../../components/partners/Partners'

const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeHero />
      <HomeIntro />
      <HomeRecycling />
      <HomeRecycInfo />
      <Partners />
    </div>
  )
}

export default Home
