import React, { useEffect, useRef, useState } from "react";

export default function Article({ object, posts }) {
  const [isVisible, setIsVisible] = useState(false);
  const [fancyWord, setFancyWord] = useState("communication");
  const input = useRef("");

  const handleUpdatingWord = (e) => {
    e.preventDefault();
    setFancyWord(input.current.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 3000);
  }, []);

  const { word, color } = object;
  return (
    <>
      <div>
        {/* {posts?.map((post) => (
          <h2>{post.title}</h2>
        ))} */}
        {isVisible && (
          <h3>
            This is a <span>very</span> husty {word}
          </h3>
        )}
        <button onClick={() => setIsVisible(!isVisible)}>Magic</button>
      </div>

      <div>
        <input type="text" ref={input} />
        <p>This is a great word: {fancyWord}</p>
        <button onClick={handleUpdatingWord}>Update Word</button>
      </div>
    </>
  );
}
