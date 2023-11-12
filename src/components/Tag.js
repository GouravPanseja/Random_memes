// by default fetchdata is executed only on initial render at that tag value is empty so we get random content
// not on subsequent re-renders due to input onChange,
// but it is also called when we have written the tag and clicked on the generate button

import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from "./Spinner"
import useGif from "../hooks/useGif"
// image is present in output.data.data.images.downsized_medium.url

export default function Tag(){

    const [tag,setTag] = useState('');

    const {loading, gif, fetchData} = useGif(tag);

    return(
        <div className='w-1/2 h-max  bg-blue-500 mt-[30px] rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px] py-3'>

            <h1  className='text-2xl underline uppercase font-bold'> Random {tag} Gif </h1>

            {(loading) ? <Spinner/> : <img src={gif} className='bg-white'/>}
           
           <input
            value={tag}
            onChange={(event)=>{ setTag(event.target.value)}}
            className='w-10/12  text-lg py-2 rounded-md uppercase text-center'
           />

            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-md uppercase ' onClick={fetchData}>    {/*// We can get new gif by two ways either reloading page to execute fetchData again or straightaway call it again.... second option is better */}
                Generate
            </button>
        
        </div>
    )
    
}