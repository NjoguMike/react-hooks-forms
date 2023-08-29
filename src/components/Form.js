import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstName (event){
    const newName = event.target.value
    console.log(newName)
    setFirstName(newName)
  }
  function handleLastName(event){
    const newName = event.target.value
    setLastName(newName)
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstName}/>
      <input type="text" value={lastName} onChange={handleLastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
