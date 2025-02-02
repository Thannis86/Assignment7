import React, { useState, useEffect } from "react";
import Likes from "./likes";
import Filter from "./Filter";
import DeletePost from "./Delete";

export default function Posts() {
  const [items, setItems] = useState([]);

  // Fetch Posts

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://assignment7-jt24.onrender.com/posts");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Data Failed");
      }
    }
    fetchData();
  }, []);

  //
  return (
    <>
      <div id="PostFilter"></div>
      <Filter setItems={setItems} />
      <div id="PostBox">
        {items.map((item) => {
          return (
            <div className="PostBox" key={item.id}>
              <p>From: {item.name}</p>
              <p>{item.words}</p>
              <button onClick={Likes} id={item.id}>
                Likes:{item.likes}
              </button>
              <button onClick={DeletePost} id={item.id}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
