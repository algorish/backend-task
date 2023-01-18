import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useCheckAuth } from "../hook/useCheckAuth";

const Navbar = () => {
  const token = useCheckAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(token);

  useEffect(() => {
    setIsAuthenticated(token);
  }, [token]);

  const handleSignout = () => {
    localStorage.clear(); // clearing all data from localstorage including token as well
    window.location.href = "/";
  };
  return (
    <Row gutter={5} style={{ marginBottom: 20 }}>
      <Col className="gutter-row" span={1.5}>
        <Button href="/">About us</Button>
      </Col>
      {isAuthenticated ? (
        <Col className="gutter-row" span={2}>
          <Button
            onClick={() => {
              handleSignout();
            }}
          >
            Sign out
          </Button>
        </Col>
      ) : (
        <Col className="gutter-row" span={1.5}>
          <Button href="/login">Sign in</Button>
        </Col>
      )}
    </Row>
  );
};

export default Navbar;
