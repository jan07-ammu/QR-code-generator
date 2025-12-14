import axios from 'axios';
import React, { useRef, useState } from 'react';
import Loading from './Loading';
import { Github } from 'lucide-react';
const Design = () => {
  const textRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  
  const handleclick = async () => {
    const m = textRef.current.value;
    try {
      setLoading(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(m)}`;
      console.log(url.data);
      setImage(url); 
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(()=>setLoading(false),500);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="bg-black w-screen">
          <div className="w-screen flex justify-center">
            <p className="text-white text-2xl font-bold mt-5">QR CODE GENERATOR!</p>
          </div>
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col space-y-5">
              <p className="text-white">Write a secret message to your friends 🤩🎉</p>
              <p className="text-white">Share the QR and make fun 🤩</p>
              <textarea
                placeholder="ENTER YOUR TEXT"
                className="w-[300px] h-[100px] rounded-lg"
                ref={textRef}
              ></textarea>
              <button
                className="bg-orange-400 text-white rounded-xl p-3"
                onClick={handleclick}
              >
                GET QR CODE
              </button>
            </div>
            {image && (
              <div className="mt-5 text-center">
                <p className="font-mono text-white">YOUR QR CODE</p>
                <img src={image} alt="QR Code" className="w-[150px] h-[150px]" />
              </div>
            )}
          </div>
          
        </div>
      )}
    </>
  );
};

export default Design;
