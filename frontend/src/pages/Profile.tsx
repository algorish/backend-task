import { Col, Row, Image, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { useCheckAuth } from "../hook/useCheckAuth";
import { userImg } from "../utils/mockData";
import { fetchAuthor, fetchProfile, fetchQuote } from "../utils/services";
import { Modal } from "../components";

const { Text } = Typography;

// TypeDefs
type StateType = {
  fullname?: string;
  eamil?: string;
  hasAuthorRespone?: boolean;
  hasQuoteResponse?: boolean;
};
type ActionType = { type: string; payload: StateType };

// Init state and Reducer for local sate
const initialState: StateType = {
  fullname: "",
  eamil: "",
  hasAuthorRespone: false,
  hasQuoteResponse: false,
};
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };

    default:
      throw new Error();
  }
}

let cancelAuthorReq: any;
let cancelQuoteReq: any;

const Profile = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = useCheckAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // if token not found, show alert
        if (!token) return alert("Session Expired");

        let profileData = await fetchProfile(token);
        dispatch({ type: "SET_DATA", payload: profileData });
      } catch (e) {
        navigate("/");
        throw e;
      }
    })();
  }, []);

  // handling author and quoute api calls
  const handleAuthorQuoteCalls = async () => {
    setShowModal(true);
    let authorResponse = await fetchAuthor(token, cancelAuthorReq);
    if (authorResponse) {
      dispatch({ type: "SET_DATA", payload: { hasAuthorRespone: true } });
    }
    let quoteResponse = await fetchQuote(token, cancelQuoteReq);
    if (quoteResponse) {
      dispatch({ type: "SET_DATA", payload: { hasQuoteResponse: true } });
    }
  };

  // Canceling request using cancle token
  const handleCancleRequest = () => {
    cancelAuthorReq("Canceling the author request");
    cancelQuoteReq("Canceling the quote request");
  };

  return (
    <>
      <Col>
        <Row>
          <Col span={5}>
            <Image
              src={userImg}
              width={100}
              style={{ borderRadius: 999, border: "1px solid black" }}
            />
          </Col>
          <Col>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              Welcome{`, ${state.fullname} !`}{" "}
            </Text>
            <Col>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  handleAuthorQuoteCalls();
                }}
              >
                Update
              </Button>
            </Col>
          </Col>
        </Row>
        <Row>
          <Text style={{ fontSize: 18, marginTop: 20 }}>
            [here is place for concatenated result from long running call]
          </Text>
        </Row>
      </Col>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        isAuthorFetched={state.hasAuthorRespone}
        isQuoteFetched={state.hasQuoteResponse}
        cancleRequest={handleCancleRequest}
      />
    </>
  );
};

export default Profile;
