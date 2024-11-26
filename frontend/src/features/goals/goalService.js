import axios from "axios";

const API_URL = "https://goalpulse-api.vercel.app/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Update user goal
const updateGoal = async (goalId, goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + goalId, goalData, config);

  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};

export default goalService;
