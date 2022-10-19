import { useEffect } from 'react'
import { useState } from 'react'
import Ignition from '../components/Ignition'
import Model from '../components/Model'
import Speedometer from '../components/Speedometer'
import Tachomerter from '../components/Tachomerter'

const Home = () => {
  const [speed, setSpeed] = useState(10)
  document.documentElement.style.setProperty('--speed', 6 / speed + 's')
  document.documentElement.style.setProperty('--angle-pointer', -128 + speed * 1.345 + 'deg')

  if (speed < 0) {
    setSpeed(1)
  }

  const handler = (e) => {
    e.preventDefault()
    console.log('handler', e)
    setSpeed(speed + 10)
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
                setSpeed(speed + 10)
              }}
            >
              faster
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(speed - 10)
              }}
            >
              slower
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(20)
              }}
            >
              set 20
            </button>
            <button
              className='btn'
              onClick={() => {
                setSpeed(10)
              }}
            >
              set 10
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
          <Ignition props={speed} />
        </div>
      </main>
    </>
  )
}

export default Home
