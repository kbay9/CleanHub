import './homeRecyclingCard2.css'

const HomeRecyclingCard2 = ({ img, title, content }) => {
  return (
    <div className='homeRecyclingCardContainer'>
      <div className='homeRecyclingCardWrapper'>
        <img src={img} alt='card-img' className='homeRecImg' />
        <p className='homeRecyclingCardP'>{title}</p>
        <div className='homeRecyclingCardContent'>{content}</div>
      </div>
    </div>
  )
}

export default HomeRecyclingCard2
