export default function MainForm() {
  function handleSubmit(event) {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      words: document.getElementById("words").value,
    };

    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/formEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
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
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your Email"
          required
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
