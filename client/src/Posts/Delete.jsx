export default function DeletePosts(event) {
  console.log(event.target.id);
  const deleteId = event.target.id;
  fetch("http://localhost:8080/delete-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ deleteId }),
  });
}
