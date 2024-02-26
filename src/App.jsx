import React, { useState } from "react";
import Clock from "./Components/Clock";
import Start from "./Components/Start";

const App = () => {
  const [start, setStart] = useState(false);
  const [formData, setFormData] = useState({
    player1Name: "Player 1",
    player2Name: "Player 2",
    time: "10",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (formData.player1Name === "Enter Namee") {
      alert("Enter Player 1 Name");
      return;
    } else if (formData.player2Name === "Enter Namee") {
      alert("Enter Player 2 Name");
      return;
    }
    setStart((prevStart) => !prevStart);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(value);
  };
  const restart = () => {
    setStart((prevStart) => !prevStart);
  };

  return (
    <div className="h-[100dvh] w-screen bg-gradient-to-b font-mono tracking-tighter font-bold uppercase from-blue-400 via-yellow-300 to-orange-500 flex items-center justify-center">
      {start ? (
        <Clock restart={restart} formData={formData} />
      ) : (
        <Start
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      )}
    </div>
  );
};

export default App;
