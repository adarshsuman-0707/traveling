import React from 'react'
import { Link } from 'react-router-dom'

const holidayData = [
  { name: 'Turkey', image: 'turkey.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates autem dolores.', link: '/turky' },
  { name: 'Dubai', image: 'dubai1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illum et, sunt nostrum.', link: '/Dubai' },
  { name: 'Sri Lanka', image: 'srilanka.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/Shirilanka' },
  { name: 'Iraq', image: 'iraq.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/Iraq' },
  { name: 'Malaysia', image: 'maleshiya.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/Maleshiya' },
  { name: 'London', image: 'london.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/London' },
  { name: 'Singapore', image: 'singapur.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/Singapur' },
  { name: 'Egypt', image: 'egypt.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur aut laboriosam.', link: '/Egypt' },
];

function Domestic() {
  return (
    <section id="holiday" className="py-5 text-center">
      <h1 className="mb-4 font-serif animate__animated animate__fadeInUp">INTERNATIONAL</h1>
      <div className="holiday-container">
        <div className="overflow-x-auto py-5">
          <div className="scrollContainer flex gap-5 overflow-x-auto pb-5">
            {holidayData.map((item, index) => (
              <div key={index} className="min-w-[400px] bg-white rounded-lg shadow-lg flex flex-col items-center p-6 transition-transform transform hover:scale-105">
                <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg" />
                <h1 className="text-2xl text-[#021526] mt-4">{item.name}</h1>
                <p className="text-base text-[#021526] text-center my-2">{item.description}</p>
                <Link to={item.link} className="border-2 border-[#d9832e] text-[#d9832e] rounded-md py-2 px-4 hover:bg-[#d9832e] hover:text-white transition-all">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Domestic;
