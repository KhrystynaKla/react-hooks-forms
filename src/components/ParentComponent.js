import React, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(false);
    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);
  
    function handleFirstNameChange(event){
      setFirstName(event.target.value)
    }
    function handleLastNameChange(event){
      setLastName(Event.target.value)
    }
    function handleNewsletterChange(event) {
      // .checked, not .value!
      setNewsletter(event.target.checked);
      console.log(event.target.checked)
    }
    function handleNumberChange(event) {
        const newNumber = parseInt(event.target.value);
        if (newNumber >= 0 && newNumber <= 5) {
          setNumber(newNumber);
          setIsInvalidNumber(null);
        } else {
          setIsInvalidNumber(`${newNumber} is not a valid number!`);
        }
      }
    
    return (
        <div>
        <DisplayData 
            firstName={firstName} 
            lastName={lastName} 
        />
        <Form 
            firstName={firstName} 
            lastName={lastName} 
            newsletter={newsletter} 
            handleFirstNameChange={handleFirstNameChange} 
            handleLastNameChange={handleLastNameChange} 
            handleNewsletterChange={handleNewsletterChange}
            number={number}
            handleNumberChange={handleNumberChange}
            isInvalidNumber={isInvalidNumber}
        />
        </div>
    );
}

export default ParentComponent;