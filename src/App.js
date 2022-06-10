import { useState } from "react";

function App() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);
    
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };
  return (
    <div>
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add more</button>
    </div>
  );
}

export default App;
