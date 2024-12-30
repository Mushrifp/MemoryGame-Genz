import React, { useEffect, useState } from "react";
import { getRandomImages } from "../assets/images";
import win from "../assets/winning.mp4";
import gta from "../assets/gta.png";

import Gamebutton from "./Gamebutton";

function Easy() {
  const [img, setImg] = useState([]);
  const [check, setCheck] = useState([]);
  const [bg, setBg] = useState(true);
  const [remCount, setRemCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const imgData = getRandomImages(5);
    const dupe = imgData.concat(imgData);

    for (let i = dupe.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dupe[i], dupe[j]] = [dupe[j], dupe[i]];
    }

    setImg(dupe);
    setRemCount(0);
    setGameWon(false);
    setBg(true);
  };

  const compareCard = () => {
    if (check[0].details.key === check[1].details.key) {
      setImg((prevImg) => {
        const updatedImg = [...prevImg];
        updatedImg[check[0].indexOf] = {
          ...updatedImg[check[0].indexOf],
          correct: true,
        };
        updatedImg[check[1].indexOf] = {
          ...updatedImg[check[1].indexOf],
          correct: true,
        };
        return updatedImg;
      });

      setRemCount((prev) => prev + 1);
      setCheck([]);

      if (remCount != 4) {
        setBg(false);

        setTimeout(() => {
          setBg(true);
        }, 1500);
      }
    } else {
      setTimeout(() => {
        setImg((prevImg) => {
          const updatedImg = [...prevImg];
          updatedImg[check[0].indexOf] = {
            ...updatedImg[check[0].indexOf],
            flip: false,
          };
          updatedImg[check[1].indexOf] = {
            ...updatedImg[check[1].indexOf],
            flip: false,
          };
          return updatedImg;
        });
        setCheck([]);
      }, 500);
    }
  };

  useEffect(() => {
    if (check.length === 2) {
      compareCard();
    }
  }, [check]);

  useEffect(() => {
    console.log(remCount);
    if (remCount === 5) {
      console.log("All pairs matched, triggering win screen!");
      setGameWon(true);
    }
  }, [remCount]);

  const handleImageClick = (index, data) => {
    if (data.correct || check.length == 2 || data.flip) return;

    const tempDetails = {
      indexOf: index,
      details: data,
    };

    console.log("suiii", check);
    setCheck((prev) => [...prev, tempDetails]);

    setImg((prevImg) => {
      const updatedImg = [...prevImg];
      updatedImg[index] = {
        ...updatedImg[index],
        flip: !updatedImg[index].flip,
      };
      return updatedImg;
    });
  };

  return (
    <>
      {bg ? (
        <img
          className="absolute h-screen w-full"
          src="https://img.decrypt.co/insecure/rs:fit:750:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/11/chillguy-gID_7.jpg@webp"
          alt="background"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={win} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
      <Gamebutton onClick={startGame} />
      

        {!gameWon && (
          <div>
            <div className="grid grid-cols-5 gap-4 mb-8 mt-[15%]">
              {img.slice(0, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onClick={() => handleImageClick(index, image)}
                >
                  {image.flip || image.correct ? (
                    <img
                      src={image.img}
                      alt="Actual Image"
                      className="w-full h-32 object-cover rounded-lg shadow-lg"
                    />
                  ) : (
                    <img
                      src="https://images8.alphacoders.com/138/1384043.webp"
                      alt="Back Image"
                      className="w-full h-32 object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-4">
              {img.slice(5, 10).map((image, index) => (
                <div
                  key={index}
                  className="relative"
                  onClick={() => handleImageClick(index + 5, image)}
                >
                  {image.flip || image.correct ? (
                    <img
                      src={image.img}
                      alt="Actual Image"
                      className="w-full h-32 object-cover rounded-lg shadow-lg"
                    />
                  ) : (
                    <img
                      src="https://images8.alphacoders.com/138/1384043.webp"
                      alt="Back Image"
                      className="w-full h-32 object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {gameWon && (
          <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 z-50">
            <img src={gta} alt="Mission Passed" className="w-[400px]" />
           <Gamebutton onClick={startGame} />
          </div>
        )}
      </div>
    </>
  );
}

export default Easy;
