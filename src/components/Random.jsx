import axios from "axios";
import { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


export default function Random() {

  const {gif,loading,fetchData} = useGif();

  return (
    <div className="w-1/2 pt-[15px] pb-[20px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="text-2xl underline uppercase font-semibold" >A Random Gif</h1>

      {
        loading ? (<Spinner />) :  (<img src={gif} width="450px" alt="none"/>)
      }

      <button onClick={() => fetchData()} className="w-10/12 text-lg py-2 rounded-lg bg-yellow-800 ">Generate</button>
    </div>
  );
}
