import { useState } from "react";
import { useCaloryContext } from "../hooks/useCaloryContext";
import { useAuthContext } from "../hooks/useAuthContext";
//Creating the form that collects data and does a POST request to the database
const CaloryForm = () => {
  const { dispatch } = useCaloryContext();
  const { user } = useAuthContext();
  // Creating state for each property of the calories
  const [food, setFood] = useState("");
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  //Function that gets triggered upon the submision of the form
  const handleSubmit = async (e) => {
    e.preventDefault(); //To prevent the form from submittting on its own, especially during a page refresh

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const calory = { food, meal, calories };
    const response = await fetch("/api/calories", {
      method: "POST",
      body: JSON.stringify(calory),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      //Trying to get message from the error property in backend/controllers/caloryController.js
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      //This resets the form upon a succesfull submision of new calory
      setFood("");
      setMeal("");
      setCalories("");
      setError(null);
      setEmptyFields([]);
      console.log("new calory added", json);
      dispatch({ type: "CREATE_CALORY", payload: json });
    }
  };

  //Layout of the form
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Meal Info</h3>
      <label>Name of Food:</label>
      <input
        type="text"
        onChange={(e) => setFood(e.target.value)}
        value={food}
        className={emptyFields.includes("food") ? "error" : "inner"}
      />
      <label>Meal:</label>
      <select onChange={(e) => setMeal(e.target.value)} value={meal}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Others">Others</option>
      </select>

      <label>Amount of Calories:</label>
      <input
        type="number"
        onChange={(e) => setCalories(e.target.value)}
        value={calories}
        className={emptyFields.includes("calories") ? "error" : "inner"}
      />
      <button>Add Meal</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CaloryForm;
