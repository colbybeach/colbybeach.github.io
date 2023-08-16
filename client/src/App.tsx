import Navbar from './components/Navbar'
import profilePic from './assets/nobackground.png'
import Loading from './components/Loading'

function App() {

  //Global Padding - 4 
  return (

    <>
    <Navbar />

      <div className='p-8'>

        <div className='w-full text-3xl font-code italic flex items-center justify-around'>
          <img src={""} className='w-5/12'/>

          <Loading/>
          
        </div>
      

      </div>
      </>
  )
}

export default App
