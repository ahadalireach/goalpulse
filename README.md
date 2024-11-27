# Goal Pulse

**Goal Pulse** is a web application designed to help users set, track, and manage their goals with ease. The platform provides a user-friendly interface for efficient goal management and secure user authentication.

## Technologies Used

- **Frontend:** React JS, Vanilla CSS, React Redux
- **Backend:** Node JS, Express JS
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

## Features

- **Set Goals**: Users can create new goals and set deadlines.
- **Track Progress**: Monitor the progress of ongoing goals.
- **Manage Goals**: Delete goals as needed.
- **Secure Authentication**: Secure user login and registration with JWT.
- **Intuitive Interface**: Designed to enhance productivity and ease of use.

## Getting Started

### Prerequisites

- Node.js and npm installed
- VS Code or any other code editor
- Git (optional, for cloning the repository)

### File Structures

```plaintext
frontend/
├── public/
│   ├── favicon.ico             # Application icon
│   └── index.html              # HTML template for React entry point
├── src/
│   ├── app/
│   │   └── store.js            # Redux store configuration
│   ├── assets/                 # Static assets (e.g., images, styles)
│   ├── components/             # Reusable UI components
│   │   ├── GoalForm.jsx        # Component for creating/editing goals
│   │   ├── GoalItem.jsx        # Component for displaying a goal
│   │   ├── Header.jsx          # Navigation bar and header
│   │   └── Spinner.jsx         # Loader component
│   ├── features/               # Redux slices and services
│   │   ├── auth/
│   │   │   ├── authService.js  # Handles API calls related to authentication
│   │   │   └── authSlice.js    # Redux slice for authentication
│   │   ├── goals/
│   │       ├── goalService.js  # Handles API calls related to goals
│   │       └── goalSlice.js    # Redux slice for goals
│   ├── pages/                  # Page components for routing
│   │   ├── Dashboard.jsx       # User dashboard showing goals
│   │   ├── Home.jsx            # Landing page
│   │   ├── Register.jsx        # User registration page
│   │   └── Login.jsx           # User login page
│   ├── App.jsx                 # Main React app component
│   ├── index.css               # CSS styles
│   └── index.js                # React entry point rendering the app
└── .gitignore                  # Git ignore file

```

```plaintext
backend/
├── db/
│   └── db.js                 # Database connection setup
├── controllers/
│   ├── goalController.js     # Handles logic for managing goals
│   └── userController.js     # Handles logic for managing users
├── middleware/
│   ├── authMiddleware.js     # Authentication and authorization middleware
│   └── errorMiddleware.js    # Error handling middleware
├── models/
│   ├── userModel.js          # Schema and model for users
│   └── goalModel.js          # Schema and model for goals
├── routes/
│   ├── goalRoutes.js         # API routes for goal-related operations
│   └── userRoutes.js         # API routes for user-related operations
├── .gitignore                # Git ignore file
└── index.js                  # Entry point of the backend application

```

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/goal-pulse.git
   ```

2. **Open with VS Code**

   Open the project directory with VS Code or your preferred code editor.

3. **Install Dependencies**

   **Frontend:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install the dependencies:

     ```bash
     npm install
     ```

   - Run the development server:

     ```bash
     npm start
     ```

   **Backend:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Create a `.env` file in the backend directory and add the following environment variables:

     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

   - Install the dependencies:

     ```bash
     npm install
     ```

   - Start the server:

     ```bash
     npm start
     ```

4. **Update API URLs**

   Ensure that the API URLs in the frontend code are correctly set to point to your local backend server.

5. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

**Live Demo**

- Live Web: [thefitclub-web.netlify.app](https://goalpulse.vercel.app)
- GitHub Repo: Give it a Star!
- Live Video Demo: [Link](https://youtu.be/8F8mszMIqCM?si=MBytYK9bJndD6ecX)

**Contact**

For any questions or feedback, please reach out to me at [ahadali.reach@gmail.com](ahadali.reach@gmail.com).
