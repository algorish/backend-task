import { useEffect, useReducer } from "react";
import { fetchAbout } from "../utils/services";

type StateType = { success: boolean; data: { info: string } };

const initialState: StateType = {
  success: false,
  data: { info: "" },
};
function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_DATA":
      return { ...action.payload };

    default:
      throw new Error();
  }
}

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        let data = await fetchAbout();
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {}
    })();

    document.title = "About";
  }, []);
  return (
    <>
      {state && (
        <h2
          data-id="info-label"
          dangerouslySetInnerHTML={{ __html: state?.data.info }}
        ></h2>
      )}
    </>
  );
};

export default About;
