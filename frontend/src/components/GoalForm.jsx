import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGoal, updateGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

function GoalForm({ goalToUpdate, setGoalToUpdate }) {
  const [text, setText] = useState(goalToUpdate ? goalToUpdate.text : "");
  const [goalId, setGoalId] = useState(goalToUpdate ? goalToUpdate._id : "");
  const dispatch = useDispatch();

  useEffect(() => {
    if (goalToUpdate) {
      setText(goalToUpdate.text);
      setGoalId(goalToUpdate._id);
    }
  }, [goalToUpdate]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      toast.error("Please enter a goal!");
      return;
    }

    if (goalId) {
      dispatch(updateGoal({ id: goalId, text }));
      setGoalToUpdate(null);
    } else {
      dispatch(createGoal({ text }));
    }
    setText("");
    setGoalId("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {goalId ? "Update Goal" : "Add Goal"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
