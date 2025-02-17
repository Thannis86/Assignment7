export default function MainForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      words: document.getElementById("words").value,
    };

    console.log(formData);
    fetch("https://assignment7-jt24.onrender.com/submit-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
  }
  return (
    <>
      <form id="MainForm" onClick={handleSubmit}>
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
          type="text"
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
