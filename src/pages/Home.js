import { useEffect } from 'react'
import { useState } from 'react'
import Ignition from '../components/Ignition'
import Model from '../components/Model'
import Speedometer from '../components/Speedometer'
import Tachomerter from '../components/Tachomerter'

const Home = () => {
  const [speed, setSpeed] = useState(40)
  document.documentElement.style.setProperty('--speed2', speed + 's')

  if (speed <= 0) {
    setSpeed(0.001)
  }

  useEffect(() => {
    // console.log('effect')
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
        <div className='panel'>
          <div className='panel__wrapper'>
            <button
              className='btn'
              onClick={() => {
                setSpeed(speed - 0.05)
              }}
            >
              faster
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(speed + 0.05)
              }}
            >
              slower
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(0.2)
              }}
            >
              set 0.20
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(0.1)
              }}
            >
              set 0.10
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(1)
              }}
            >
              set 1
            </button>
          </div>
        </div>
        <div className='ignition'>
          <Ignition />
        </div>
      </main>
    </>
  )
}

export default Home
