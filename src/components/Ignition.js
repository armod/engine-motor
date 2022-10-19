const Ignition = (props) => {
  const handler = (e) => {
    e.preventDefault()
    console.log('w handler', props)
    props = +10
  }
  return (
    <div>
      Ignition
      <button className='btn' onClick={handler}>
        handler
      </button>
    </div>
  )
}

export default Ignition
