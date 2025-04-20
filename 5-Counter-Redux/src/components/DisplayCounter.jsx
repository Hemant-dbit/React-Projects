import {useSelector} from "react-redux";

const Content = () => {

  const counter = useSelector((store) => store.counter);
  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Counter count is {counter} </p>
    </div>
  );
};

export default Content;
