import styles from "./ButtonContainer.module.css";
function ButtonContainer() {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((button) => (
        <button key={button} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
