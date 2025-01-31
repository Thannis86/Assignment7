import React, { useState, useEffect } from "react";

export default function Posts() {
  const [items, setItems] = useState([]);
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
  return (
    <>
      <div id="PostBox">
        {items.map((item) => {
          return (
            <div className="PostBox" key={item.id}>
              <p>From: {item.name}</p>
              <p>{item.words}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
