import Image from 'next/image'
import React from 'react'

const Weather = ({ data }) => {
  console.log(data)
  console.log(data.dt)
  const windSpeed = ((data.wind.speed * 1000) / 3600).toFixed(2)
  const date = new Date(data.dt * 1000)
  const convertedDate = date.toLocaleDateString('fa-IR')
  return (
    <div className='relative flex flex-col justify-start max-w-[500px] w-full h-[90vh] m-auto text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-4'>
        <div className='flex flex-col items-center justify-center w-full'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl text-white text-center font-bold'>{data.weather[0].description}</p>
        </div>
        <div className='flex justify-center items-center self-stretch md:self-center w-full'><p className='text-8xl text-white'>{data.main.temp.toFixed(0)}&#176;</p></div>
      </div>
      {/* Bottom */}

      <div className='bg-black/50 relative p-2 md:p-4 rounded-md mt-20 text-white'>
        <p className='text-2xl text-center pb-6'>آب و هوای شهر {data.name} </p>
        <div className='flex gap-4 justify-between text-center'>
          <div>
            <p className='text-xl'>تاریخ</p>
            <p className='font-bold text-lg md:text-xl'>{convertedDate}</p>
          </div>
          <div>
            <p className='text-xl'>رطوبت</p>
            <p className='font-bold text-lg md:text-xl'>{data.main.humidity}%</p>
          </div>
          <div>
            <p className='text-xl'>سرعت باد</p>
            <p className='font-bold text-lg md:text-xl' dir='ltr'>{windSpeed} km/hr</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
