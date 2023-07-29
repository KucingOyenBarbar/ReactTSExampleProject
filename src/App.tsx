import { Container, Row, Col } from "react-bootstrap";
import { CounterProvider } from "./context/CounterContext";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center py-5">
          <Col lg={5} sm={12}>
            <CounterProvider>
              <Counter>{(num: number) => <>Count: {num}</>}</Counter>
            </CounterProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}
