import { Link } from "react-router-dom";
import { FaBullseye, FaChartLine, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="container">
          <h1>Welcome to Goal Pulse</h1>
          <p>Track, manage, and achieve your goals effortlessly.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-reverse">
              Login
            </Link>
          </div>
          <div className="hero-line"></div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h3>Why Choose Goal Pulse?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <FaBullseye size={40} className="feature-icon" />
              <h3>Set Goals</h3>
              <p>Define clear and actionable goals that keep you motivated.</p>
            </div>
            <div className="feature-card">
              <FaChartLine size={40} className="feature-icon" />
              <h3>Track Progress</h3>
              <p>Monitor your achievements and milestones with ease.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle size={40} className="feature-icon" />
              <h3>Achieve Success</h3>
              <p>Stay focused and reach your full potential with Goal Pulse.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
