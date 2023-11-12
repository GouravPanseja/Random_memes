// Function of useGif hook::->
// It fetches the url from the api accordingly on the basis of tag given to it as an argument or not.
// The url is stored in the form of variable "gif"
// The loading state which is true at the beginning and false at the end of the fetching is RETURNED
// FetchData function is returned so that it can be reused later in the code (on clicking on generate)

import { useState,useEffect } from "react";
import axios from "axios";

export default function useGif(tag){


 
    const[gif,setGif] = useState('');
    const [loading,setLoading] = useState(true);
  

    async function fetchData() {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=pKT5fdocazwPx3UqgprMV9XkIwYQFteK`;   // interpolating api_key was giving error somehow
        
        try{
            setLoading(true);
            const {data}= await axios.get( tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_medium.url;  
            setGif(imageSource);
        }   
        catch(error){
            console.log(error);
        }
        setLoading(false) 
    }

    useEffect(()=>{
        fetchData();
    },[])


    return{
        fetchData:fetchData,
        gif: gif,
        loading:loading
    }
}