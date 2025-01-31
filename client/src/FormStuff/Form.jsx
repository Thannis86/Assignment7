export default function MainForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit} id="MainForm">
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Write your Name"
          required
        />
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Write your Email"
          required
        />
        <input
          type="tel"
          name="Phone"
          id="Phone"
          placeholder="Write your phone number"
          required
        />
        <input
          type="text"
          name="Comments"
          id="Comments"
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
