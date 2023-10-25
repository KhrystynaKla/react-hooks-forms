import React from "react";

function Form({
  firstName,
  lastName,
  newsletter,
  handleFirstNameChange,
  handleLastNameChange,
  handleNewsletterChange,
  number,
  handleNumberChange,
  isInvalidNumber
}) {
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
