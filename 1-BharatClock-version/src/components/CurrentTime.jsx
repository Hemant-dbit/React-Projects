import { useEffect ,useState } from "react";

function CurrentTime() {
 const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update the time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);


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
