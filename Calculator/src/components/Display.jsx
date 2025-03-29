import styles from "./Display.module.css";
function Display({ displayVal }) {
  return (
    <div>
      <input
        type="text"
        className={styles.display}
        value={displayVal}
        readOnly
      />
    </div>
  );
}

export default Display;
