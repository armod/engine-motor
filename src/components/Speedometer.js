import '../components/speedometer.scss'

const Speedometer = () => {
  return (
    <div className='speed'>
      <p>Vehicle Speed (Speedometer)</p>
      <div className='speed__wheel'>
        <div className='speed__tick'>
          <div className='tick' value='0'></div>
          <div className='tick' value='10'></div>
          <div className='tick' value='20'></div>
          <div className='tick' value='30'></div>
          <div className='tick' value='40'></div>
          <div className='tick' value='50'></div>
          <div className='tick' value='60'></div>
          <div className='tick' value='70'></div>
          <div className='tick' value='80'></div>
          <div className='tick' value='90'></div>
          <div className='tick' value='100'></div>
          <div className='tick' value='110'></div>
          <div className='tick' value='120'></div>
          <div className='tick' value='130'></div>
          <div className='tick' value='140'></div>
          <div className='tick' value='150'></div>
          <div className='tick' value='160'></div>
          <div className='tick' value='170'></div>
          <div className='tick' value='180'></div>
          <div className='tick' value='190'></div>
        </div>
        <div className='pointer'></div>
      </div>
    </div>
  )
}

export default Speedometer
