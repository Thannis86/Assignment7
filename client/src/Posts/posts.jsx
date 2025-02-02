import React, { useState, useEffect } from "react";
import Likes from "./likes";
import Filter from "./Filter";

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
      <div id="PostFilter"></div>
      <Filter />
      <div id="PostBox">
        {items.map((item) => {
          return (
            <div className="PostBox" key={item.id}>
              <p>From: {item.name}</p>
              <p>{item.words}</p>
              <button onClick={Likes} id={item.id}>
                Likes:{item.likes}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
