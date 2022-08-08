import { useCaloryContext } from "../hooks/useCaloryContext";
import { useAuthContext } from "../hooks/useAuthContext";


//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const CaloryDisplay = ({ calory }) => {
  const { dispatch } = useCaloryContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/calories/" + calory._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_CALORY", payload: json });
    }
  };
  return (
    <div className="calory-display">
      <h4>{calory.food}</h4>
      <p>
        <strong>Meal: </strong>
        {calory.meal}
      </p>
      <p>
        <strong>Calories: </strong>
        {calory.calories}cals
      </p>
      <p>
        {formatDistanceToNow(new Date(calory.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default CaloryDisplay;
