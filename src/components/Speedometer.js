import '../components/speedometer.scss'

const Speedometer = () => {
  return (
    <div className='speed'>
      <p>Vehicle Speed (Speedometer)</p>
      <div className='speed__wheel'>
        <div className='speed__tick'>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
          <div className='tick'></div>
        </div>
        <div className='pointer'></div>
      </div>
    </div>
  )
}

export default Speedometer
