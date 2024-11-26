import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

function GoalItem({ goal, setGoalToUpdate }) {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setGoalToUpdate(goal);
  };

  const handleDeleteClick = () => {
    dispatch(deleteGoal(goal._id));
  };

  return (
    <div className="goal">
      <div className="goal-date">
        {new Date(goal.createdAt).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="goal-text">{goal.text}</div>
      <div className="goal-actions">
        <button
          onClick={handleEditClick}
          className="goal-edit-btn"
          aria-label="Edit Goal"
        >
          <FaEdit />
        </button>
        <button
          onClick={handleDeleteClick}
          className="goal-delete-btn"
          aria-label="Delete Goal"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default GoalItem;
