import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


export default function Tag() {

  const [tag,setTag] = useState("");
  const {gif,loading,fetchData} = useGif();

   return (
    <div className="w-1/2 pt-[15px] pb-[20px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="text-2xl underline uppercase font-semibold" >Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) :  (<img src={gif} width="450px" alt="none"/>)
      }

      <input 
        className="w-10/12 text-lg py-2 rounded-lg text-center"
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />

      <button onClick={() => fetchData(tag)} className="w-10/12 text-lg py-2 rounded-lg bg-yellow-800 ">Generate</button>
    </div>
  );
}
