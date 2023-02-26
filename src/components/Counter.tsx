import { useSelector } from "react-redux";

type CounterState = {
  counter: {
    value: number;
  };
};

function Counter() {
  const countValue = useSelector((state: CounterState) => state.counter.value);
  console.log(countValue);

  return (
    <div>
      <h1>1</h1>
    </div>
  );
}

export default Counter;
