import React from 'react'


export default function Hero() {
  return (
    <div className=' my-[100px] grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-left space-y-12 md: mb-10  '>
          <h2 className='text-6xl font-bold'> <span className='text-red-400'>Studs</span> and <span className='text-red-400'>Puppies</span></h2>
          <h2 className='text-6xl font-bold'>You Can Trust</h2>
          <p className='w-full pr-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem laborum iusto dolorum, nostrum consequatur eaque saepe explicabo consequuntur quia consectetur nemo optio pariatur molestias nisi facilis suscipit inventore perferendis voluptatum.</p>
          <div className='flex space-x-4 justify-center'>
           <button className='bg-stone-800 p-3 w-[200px] text-white text-center rounded-md shadow-md hover:bg-stone-700'>Check us out</button> 
           <button className='border border-stone-800 p-3 w-[200px] text-center rounded-md shadow-md hover:bg-gray-50'>Check us out</button>
          </div>
        </div>
        <div className='flex items-center'>
        <img className='object-fit w-full' src="https://cdn.dribbble.com/users/1090020/screenshots/15175783/media/64b1a87c8c4fb3ad8d324cc2eb286f70.png?compress=1&resize=400x300" />
        </div>
    </div>
  )
}