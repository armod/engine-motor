import React from 'react'
import Ignition from '../components/Ignition'
import Model from '../components/Model'
import Speedometer from '../components/Speedometer'
import Tachomerter from '../components/Tachomerter'

const Home = () => {
  return (
    <>
      <header className='header'>
        <p>Engine Motor Model</p>
      </header>
      <main className='wrapper'>
        <div className='model'>
          <Model />
        </div>
        <div className='speedometer'>
          <Speedometer />
        </div>
        <div className='tachometer'>
          <Tachomerter />
        </div>
        <div className='ignition'>
          <Ignition />
        </div>
      </main>
    </>
  )
}

export default Home