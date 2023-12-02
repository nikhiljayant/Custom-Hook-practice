import React, { useState } from 'react'
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

const API_KEY = "NWo4iVJzDw7ZHF2ami2rn8D1T1821o6N";

const Tag = () => {

  const [tag, setTag] = useState('');
  
  const { gif, isLoading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag); // this function will automatically generate a random meme
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 bg-yellow-500 rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>
        {`Random GIF of ${tag}`}
      </h1>

      {
        isLoading ?
          (<Spinner />) :
          (<img src={gif} width="450" />)
      }

      <input
        type='text'  
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px]'
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className='w-10/12 bg-yellow-700 text-lg py-2 rounded-lg mb-[20px]'
      > 
        GENERATE
      </button>

    </div>
  )
}

export default Tag