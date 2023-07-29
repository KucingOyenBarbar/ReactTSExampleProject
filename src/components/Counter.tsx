import { ReactNode } from "react";
import { Card, Button } from "react-bootstrap";
import { useCounter } from "../context/CounterContext";

export type CounterProps = { children: (num: number) => ReactNode };

export default function Counter({ children }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <Card
        body
        bg="dark"
        color="white"
        style={{
          border: "0",
          borderRadius: "0",
          boxShadow: "0",
        }}
      >
        <Card.Title className="text-start text-capitalize text-white">
          Counter App
        </Card.Title>
        <hr className="text-white-50" />

        <div className="m-auto text-center py-5">
          <h1 className="text-danger fst-normal fw-bolder fs-1  ">{count}</h1>
          <h3 className="text-white-50 fst-normal">{children(count)}</h3>
        </div>

        <div className="d-grid gap-2 d-md-block py-3">
          <Button onClick={increment} variant="outline-secondary">
            Incerement +
          </Button>
          <Button onClick={decrement} variant="outline-secondary ms-md-2">
            Decrement -
          </Button>
          <Button onClick={reset} variant="outline-danger  ms-md-2">
            Reset
          </Button>
        </div>
      </Card>
    </>
  );
}
