export default function MainForm() {
  // const [formValues, setFormValues] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    // fetch("http://localhost:8080/formEntry", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",

    //     // body: JSON.stringify({ name, email, phone, text }),
    //   },
    // });
  }
  return (
    <>
      <form onSubmit={handleSubmit} id="MainForm">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your Name"
          required
          // value={formValues.name}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your Email"
          required
          // value={formValues.email}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Write your phone number"
          required
        />
        <input
          type="text"
          name="words"
          id="words"
          placeholder="Please write a message for the bride and groom"
          required
        />
        <input
          type="file"
          name="Images"
          id="Images"
          placeholder="Submit Images"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
