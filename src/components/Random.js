import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';
// image is present in output.data.data.images.downsized_medium.url

export default function Random(){


    // const[gif,setGif] = useState('');
    // const [loading,setLoading] = useState(true);
  

    // async function fetchData() {

        
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=pKT5fdocazwPx3UqgprMV9XkIwYQFteK`;   // interpolating api_key was giving error somehow
    //     try{
    //         setLoading(true);
    //         const {data}= await axios.get(url);
    //         const imageSource = data.data.images.downsized_medium.url;  
    //         setGif(imageSource);

    //     }   

    //     catch(error){
    //         console.log(error);
    //     }

    //     setLoading(false)      
    // }

    // useEffect(()=>{
    //     fetchData();

    // },[])

    // We can get new gif by two ways either reloading page to execute fetchData again or straightaway call it again.... second option is better
    // function clickHandler(){
    //     fetchData();
    // }

    const {loading, gif, fetchData} = useGif();

    return(
        <div className='w-1/2 h-max  bg-green-500 mt-[30px] rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px] py-3'>

            <h1  className='text-2xl underline uppercase font-bold'> a Random Gif </h1>

            {
                (loading) ? <Spinner/> : <img src={gif} className='bg-white'/>
               
            }
           

            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-md uppercase ' onClick={fetchData}>
                Generate
            </button>
        
        </div>
    )
    
}