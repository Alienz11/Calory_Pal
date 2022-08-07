import { useEffect } from "react";
import { useCaloryContext } from "../hooks/useCaloryContext";
import { useAuthContext } from "../hooks/useAuthContext";

//Components
import CaloryDisplay from "../components/CaloryDisplay";
import CaloryForm from "../components/CaloryForm";

const HomePage = () => {
  const { calory, dispatch } = useCaloryContext();
  const { user } = useAuthContext();
  //useEffect hook fires a function when the Home component is rendered.
  useEffect(() => {
    const fetchCalory = async () => {
      //To get data from our API with help of the proxy in package.json
      const response = await fetch("/api/calories", {
        headers: { Authorization: `Bearer ${user.token}` }, //Gets data for specified user upon login/signin
      });
      const json = await response.json(); //converting data fetched to json format

      if (response.ok) {
        dispatch({ type: "SET_CALORY", payload: json });
      }
    };
    if (user) {
      fetchCalory();
    }
  }, [dispatch, user]); // The dependency empty array would make the useeffect hook fire once , being the first time the component renders
  //The calory && calory.map((calory) function only maps out a list when there are available calory data from the backend API
  return (
    <div className="home">
      <div className="calory">
        {calory &&
          calory.map((calories) => (
            <CaloryDisplay key={calories._id} calory={calories} />
          ))}
      </div>
      <CaloryForm />
    </div>
  );
};

export default HomePage;
