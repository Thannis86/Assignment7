import React, { useState, useEffect } from "react";
import Likes from "./likes";

export default function Posts() {
  const [items, setItems] = useState([]);

  // Fetch Posts

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Data Failed");
      }
    }
    fetchData();
  }, [items]);

  //
  return (
    <>
      <div id="PostBox">
        {items.map((item) => {
          let likeCount = 0;
          function likes() {
            if (item.likes == "") {
              likeCount = 0;
            } else if (item.likes > 0) {
              likeCount = item.likes;
            }
          }
          likes();
          return (
            <div className="PostBox" key={item.id}>
              <p>From: {item.name}</p>
              <p>{item.words}</p>
              <button onClick={Likes} id={item.id}>
                Likes:{likeCount}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
