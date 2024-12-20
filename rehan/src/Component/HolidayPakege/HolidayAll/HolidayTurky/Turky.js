// 
import React from 'react'
import './Turky.css'


function Turky() {
  const cards = [
   
     {
      id : 1,
      imgUrl : 'dubai1.jpg',
      heading : 'Istanbul',
      pera: '-------------hello i am pera--------------',
    },
    {
      id : 2,
      imgUrl : "iraq.jpg",
      heading : 'Cappadocia',
      pera: '-------------hello i am pera--------------',
    },
    {
      imgUrl : "egypt.jpg",
      heading : 'hello all',
      pera: '-------------hello i am pera--------------',
    },
    {
      imgUrl : "turkey.jpg",
      heading : 'hello all',
      pera: '-------------hello i am pera--------------',
    },
    {
      imgUrl : "../../../public/dubai1.jpg",
      heading : 'hello all',
      pera: '-------------hello i am pera--------------',
    },
    {
      imgUrl : "../../../public/dubai1.jpg",
      heading : 'hello all',
      pera: '-------------hello i am pera--------------',
    },
    {
      imgUrl : "../../../public/dubai1.jpg",
      heading : 'hello all',
      pera: '-------------hello i am pera--------------',
    },
  ]
  return (
    <div>
       <div className='column-holiday' >
        {cards.map((location) => (
            <div key={location.id} className='contain-holiday shadow-lg px-4 py-4'>
              <img src={location.imgUrl} alt='' className='w-56 '></img>
             <div className='flex flex-col w-full'> 
              <h1>{location.heading}</h1>
              <p className='flex flex-col justify-center items-center mt-9'>{location.pera}</p>
              <div className='flex justify-between items-center  mt-10 px-2'>
                <img src='hotel-pic.png' alt='' id='img' className='  w-[7%] '></img>
                <img src='plane-pic.png' alt='' id='img' className='w-[7%]'></img>
                <img src='binoculars-pic.png' alt='' id='img' className='w-[7%]'></img>
                <img src='food-pic.png' alt=''  id='img' className='w-[7%]'></img>
              </div>
              </div> 
               <div >
                  $20000000
               </div>
            </div>
        ))}
          <div class="contact" className=' shadow-xl h-[74vh]  px-6 sticky top-10 lg:top-10 lg:inset-1 lg:w-[25%] w-full' >
            <h1>Contact</h1>
            <div className="contact-section borde-2 border-red-400">
                
                <p>Your key to hassle-free adventures.</p>
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" placeholder="Enter your name" className='w-full'/>
                  </label>
                  <label>
                    Phone Number:
                    <input type="text" name="phone" placeholder="Enter your phone number" className='w-full' />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" placeholder="Enter your email"  className='w-full'/>
                  </label>
                 
                  <button type="submit">Submit</button>
                </form>
              </div>
          </div>
       
       </div>

    </div>
  )
}

export default Turky
