import React from "react";
import imageUrl from "../../public/bg-shorten-desktop.svg";
import { useState } from "react";
import axios from "axios";

export default function FormShortener() {
  const [url, setUrl] = useState("");
  const [urlHistory, setUrlHistory] = useState([]);
  const [isCopy, setIsCopy] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => {
        setUrlHistory([
          ...urlHistory,
          {
            urlOriginal: response.data.result.original_link,
            urlShortened: response.data.result.short_link,
          },
        ]);
        setUrl("");
      })
      .catch((error) => console.error(error));
  };

  const handleCopy = (urlShortened) => {
    navigator.clipboard.writeText(urlShortened).then(() => {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    });


  };
  return (
    <div>
      <div
        className="bg-[#2c2451]  p-10 rounded shadow mb-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <form action="" onSubmit={(e) => onSubmit(e)}>
          <input
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            type="text"
            className="w-10/12 p-3 rounded-md"
            placeholder="shorted a link here"
          />
          <button
            type="submit"
            className="ml-3 px-6 py-3 bg-cyan-500 text-white capitalize font-bold rounded-md hover:bg-cyan-400 duration-200"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {urlHistory.map((url, index) => (
          <div
            className="flex justify-between items-center bg-neutral-200 p-4 rounded"
            key={index}
          >
            <div>
              <p className="font-[Poppins] text-xl text-black">
                {url.urlOriginal}
              </p>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <p className="font-[Poppins] text-cyan-500">{url.urlShortened}</p>
              <button
                onClick={() => handleCopy(url.urlShortened)}
                className={`py-2 px-7 text-center capitalize ${
                  isCopy
                    ? "bg-[#2c2451] hover:bg-[#45387d] pointer-events-none cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-400 cursor-pointer"
                }  duration-200 text-bold text-white rounded-lg`}
              >
                {isCopy ? "copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
