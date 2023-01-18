import { Button, Col, Row } from "antd";

const Navbar = () => {
  return (
    <Row gutter={5} style={{ marginBottom: 20 }}>
      <Col className="gutter-row" span={1.5}>
        <Button>About us</Button>
      </Col>
      <Col className="gutter-row" span={1.5}>
        <Button>Sign in</Button>
      </Col>
      <Col className="gutter-row" span={2}>
        <Button>Sign out</Button>
      </Col>
    </Row>
  );
};

export default Navbar;
