import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/reducers/counterSlice";
import { Button } from "@mui/material";
import type { RootState } from "../../store/configureStore";
import { useCounterContext } from "../../contexts/CounterContext";

export const Counter = () => {
  const contador = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  const { counter, setCounter } = useCounterContext();

  const onIncrement = () => {
    dispatch(increment());
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onDecrement = () => {
    dispatch(decrement());
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div
      style={{
        width: "350px",
      }}
    >
      <p>Contador</p>
      <p
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {contador}
      </p>
      <p>Contador Context</p>
      <p
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {counter}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" onClick={onIncrement}>
          Incrementar
        </Button>
        <Button onClick={onDecrement}>Decrementar</Button>
      </div>
    </div>
  );
};
