export default function MainForm() {
  // const otherForm = document.getElementById("MainForm");

  // otherForm.addEventListener("submit", async (event) => {
  //   event.preventDefault(); // Prevent form from refreshing the page

  //   // Gather form data
  //   const formData = {
  //     name: document.getElementById("name").value,
  //     email: document.getElementById("email").value,
  //     phone: document.getElementById("phone").value,
  //     words: document.getElementById("words").value,
  //   };

  //   // Send data to the server
  //   const response = await fetch("http://localhost:8080/formEntry", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   // Handle the server response
  //   const result = await response.json();
  //   console.log("Server response:", result);
  // });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      words: document.getElementById("words").value,
    };

    console.log(formData);
    fetch("http://localhost:8080/submit-data", {
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
