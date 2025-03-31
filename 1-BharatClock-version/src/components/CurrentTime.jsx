function CurrentTime() {
  let time = new Date();

  return (
    <div>
      <h2>
        This is the current time: {time.toLocaleDateString()} -
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default CurrentTime;
