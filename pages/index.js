import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';
import useDebounce from '../hooks/useDebounce';
import SearchInput from '../components/SearchInput';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const debouncedSearchValue = useDebounce(city, 0);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${debouncedSearchValue}&units=metric&lang=fa&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='bg-black/40 z-50'>
        <Head>
          <title>Next Tailwind Sample</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.png' />
        </Head>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[1]' >
          <Image
            src='/th.jpeg'
            layout='fill'
            className='object-cover custom-img'
            alt='lake'
          />
        </div>
        {/* Background image */}
        {/* <div className="unset-img">

        </div> */}

        {/* Search */}
        <div className='relative flex flex-col justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
          <form

            onSubmit={fetchWeather}
            className='flex flex-row justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
          >
            <div>
              {/* <input
                onChange={inputOnChange}
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
              /> */}
              <SearchInput
                searchValue={city}
                setSearchValue={setCity}
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
          {/* Weather */}
          {weather.main && <Weather data={weather} />}
        </div>

      </div>
    );
  }
}
