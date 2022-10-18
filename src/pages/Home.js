import { useEffect } from 'react'
import { useState } from 'react'
import Ignition from '../components/Ignition'
import Model from '../components/Model'
import Panel from '../components/Panel'
import Speedometer from '../components/Speedometer'
import Tachomerter from '../components/Tachomerter'

const Home = () => {
  const [speed, setSpeed] = useState(2)

  {
    if (speed < 0) {
      console.log(speed)
      setSpeed(1)
      console.log(speed)
    }
  }
  useEffect(() => {
    console.log('effect')
  }, [])
  return (
    <>
      <header className='header'>
        <p>Engine Motor Model: {speed.toFixed(2)}</p>
      </header>
      <main className='wrapper'>
        <Model speed={speed} />
        <Speedometer />
        <Tachomerter />
        {/* <Panel /> */}
        <div>
          <button
            className='btn-up'
            onClick={() => {
              setSpeed(speed + 0.05)
            }}
          >
            Up
          </button>
          <button
            className='btn-dwon'
            onClick={() => {
              setSpeed(speed - 0.05)
            }}
          >
            Down
          </button>
        </div>
        <div className='ignition'>
          <Ignition />
        </div>
      </main>
    </>
  )
}

export default Home
