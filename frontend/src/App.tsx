import "antd/dist/reset.css";
import { Col } from "antd";
import { Navbar } from "./components";
import RoutingConfig from "./Routes/RoutingConfig";

function App() {
  return (
    <Col style={{ margin: "30px 50px" }}>
      <Navbar />
      <RoutingConfig />
    </Col>
  );
}

export default App;
