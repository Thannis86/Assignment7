export default function Posts() {
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
  }, []);
  return (
    <>
      <p>Hello</p>
    </>
  );
}
