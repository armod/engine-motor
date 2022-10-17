import React from 'react'
import '../components/model.scss'
// valve -zawór
// piston - tłok
// connection rod
// cam - krzywka
// cam shaft - wałek rozrządu
// timing chain - łańcuch rozrządu
// crank shaft - wał korbowy
const Model = () => {
  return (
    <div className='model'>
      <p>Engine Model</p>
      <div className='model__wrapper'>
        <div className='model__piston'></div>
        <div className='model__rod'></div>
        <div className='model__crank-shaft'>
          <div className='model__crank-shaft-cut'></div>
        </div>
      </div>
    </div>
  )
}

export default Model
