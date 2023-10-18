import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif() {
    const [gif,setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    console.log(url);

    setLoading(true);
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSource = data.data.images.downsized_large.url;
    setLoading(false);
    console.log(imgSource);
    setGif(imgSource);

  }

  useEffect(() => {
    fetchData();
  }, []);

    return { gif,loading,fetchData};
}

export default useGif;