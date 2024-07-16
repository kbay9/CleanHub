import './btnSlider.css'
import rightArrow from '../../assets/img/right-arrow.svg'
import leftArrow from '../../assets/img/left-arrow.svg'

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt='rightArrow'
        className='imgSlider'
      />
    </button>
  )
}

export default BtnSlider
