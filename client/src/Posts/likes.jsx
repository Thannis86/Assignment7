export default function Likes(event) {
  console.log(event.target.id);
  const likesId = event.target.id;
  fetch("http://localhost:8080/likes-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likesId }),
  });
}
