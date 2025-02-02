// export default function Filter() {
//   async function handleFilter() {
//     // event.preventDefault();
//     const filterData = {
//       filterName: document.getElementById("filterName").value,
//     };
//     console.log(filterData);
//     await fetch("http://localhost:8080/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ filterData }),
//     });
//   }
//   return (
//     <div>
//       <form id="FilterForm" onClick={handleFilter}>
//         <input
//           type="text"
//           placeholder="Filter by Name"
//           id="filterName"
//           name="name"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export default function Filter(props) {
  async function handleFilter(event) {
    event.preventDefault();
    const filterName = document.getElementById("filterName").value;
    console.log(filterName);
    if (filterName) {
      const response = await fetch(
        `https://assignment7-jt24.onrender.com/posts?name=${filterName}`
      );
      const data = await response.json();
      props.setItems(data);
    }
  }
  return (
    <div>
      <form id="FilterForm" onSubmit={handleFilter}>
        <input type="text" placeholder="Filter by Name" id="filterName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
