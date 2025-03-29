import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName == "C") {
      setCalVal("");
    } else if (buttonName == "=") {
      const result = eval(calVal);
      setCalVal(result);
      setTimeout(() => {
        setCalVal("");
      }, 3000);
    } else {
      const newDisplayVal = calVal + buttonName;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
