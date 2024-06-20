import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const createPassword = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  const handleGeneratePassword = () => {
    const newPassword = createPassword();
    setPassword(newPassword);
    setCopyButtonText("Copy");
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopyButtonText("Copied!");
  };

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <div>
        <Button
          buttonText="Generate Password"
          onClick={handleGeneratePassword}
        />
        <Button
          buttonText={copyButtonText}
          onClick={handleCopyPassword}
          disabled={!password}
        />
      </div>
      <p>Password: {password}</p>
    </div>
  );
}

export default App;
