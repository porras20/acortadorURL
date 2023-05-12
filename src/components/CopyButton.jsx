import React, { useState } from "react";

export default function CopyButton({ urlShortened }) {

  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = (urlShortened) => {
    navigator.clipboard.writeText(urlShortened).then(() => {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    });
  };
  
  return (
    <button
      onClick={() => handleCopy(urlShortened)}
      className={`py-2 px-7 text-center capitalize ${
        isCopy
          ? "bg-[#2c2451] hover:bg-[#45387d] pointer-events-none cursor-not-allowed"
          : "bg-cyan-500 hover:bg-cyan-400 cursor-pointer"
      }  duration-200 text-bold text-white rounded-lg`}
    >
      {isCopy ? "copied!" : "Copy"}
    </button>
  );
}
