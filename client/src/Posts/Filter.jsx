export default function Filter() {
  function handleFilter(event) {
    event.preventDefault();
    const filterData = {
      filterName: document.getElementById("filterName").value,
    };
    console.log(filterData);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filterData }),
    });
  }
  return (
    <div>
      <form id="FilterForm" onClick={handleFilter}>
        <input type="text" placeholder="Filter by Name" id="filterName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
