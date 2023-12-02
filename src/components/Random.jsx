import React from 'react'
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

const Random = () => {

  const { gif, isLoading, fetchData } = useGif();

  function clickHandler() {
    fetchData(); // this function will automatically generate a random meme
  }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>
        A Random GIF
      </h1>

      {
        isLoading ?
          (<Spinner />) :
          (<img src={gif} width="450" />)
      }

      <button
        onClick={clickHandler}
        className='w-10/12 bg-green-700 text-lg py-2 rounded-lg mb-[20px]'
      > 
        GENERATE
      </button>

    </div>
  )
}

export default Random