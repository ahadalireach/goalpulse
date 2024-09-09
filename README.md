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
- **Manage Goals**: Update or delete goals as needed.
- **Secure Authentication**: Secure user login and registration with JWT.
- **Intuitive Interface**: Designed to enhance productivity and ease of use.

## Getting Started

### Prerequisites

- Node.js and npm installed
- VS Code or any other code editor
- Git (optional, for cloning the repository)

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
