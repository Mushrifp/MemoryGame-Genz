import React, { useEffect, useState } from "react";
import { getRandomImages } from "../assets/images";
import win from "../assets/winning.mp4";
import gta from "../assets/gta.png";
import Gamebutton from "./Gamebutton";


function Hard() {
  const [img, setImg] = useState([]);
  const [check, setCheck] = useState([]);
  const [bg, setBg] = useState(true);
  const [remCount, setRemCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [limit, setLimit] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const imgData = getRandomImages(6);
    const dupe = imgData.concat(imgData);
    for (let i = dupe.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dupe[i], dupe[j]] = [dupe[j], dupe[i]];
    }
    setImg(dupe);
    setRemCount(0);
    setGameWon(false);
    setBg(true);
    setLimit(10);
    setGameOver(false);
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
      if (remCount !== 5) {
        setBg(false);
        setTimeout(() => {
          setBg(true);
        }, 1500);
      }
    } else {
      setLimit(limit - 1);
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
    if (check.length === 2) compareCard();
  }, [check]);

  useEffect(() => {
    if (remCount === 6) setGameWon(true);
  }, [remCount]);

  useEffect(() => {
    if (limit === 0) setGameOver(true);
  }, [limit]);

  const handleImageClick = (index, data) => {
    if (data.correct || check.length === 2 || data.flip) return;
    const tempDetails = { indexOf: index, details: data };
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
    <div className="min-h-screen relative">
      {bg ? (
        <img
          className="fixed h-screen w-full object-cover"
          src="https://e1.pxfuel.com/desktop-wallpaper/423/52/desktop-wallpaper-top-heavy-chad-giga-chad.jpg"
          alt="background"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-full object-cover"
        >
          <source src={win} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto  flex flex-col items-center">
          {!gameOver && !gameWon && (
            <>
              <Gamebutton onClick={startGame} />
              <h1 className="text-white text-lg md:text-3xl mb-4 mt-3">
               You have {limit} chance to left bro
              </h1>

              <div className="w-full max-w-lg md:max-w-2xl mx-auto">
                <div className="grid grid-cols-4 gap-1 md:gap-6">
                  {img.map((image, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer aspect-square w-full"
                      onClick={() => handleImageClick(index, image)}
                    >
                      {image.flip || image.correct ? (
                        <img
                          src={image.img}
                          alt="Actual Image"
                          className="w-full h-full object-cover rounded-md md:rounded-lg shadow-lg"
                        />
                      ) : (
                        <img
                          src="https://i.pinimg.com/736x/8b/6b/98/8b6b987316a515a6c4d77684e32cccc7.jpg"
                          alt="Back Image"
                          className="w-full h-full object-cover rounded-md md:rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {gameOver && (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 z-50 px-2">
              <img
                src="https://c.tenor.com/1IpU2UVKMGgAAAAd/tenor.gif"
                alt="Wasted"
                className="w-3/4 md:w-96 mb-4"
              />
              <Gamebutton onClick={startGame} />
            </div>
          )}

          {gameWon && (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50 px-2">
              <img
                src={gta}
                alt="Mission Passed"
                className="w-3/4 md:w-96 mb-4"
              />
              <Gamebutton onClick={startGame} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hard;
