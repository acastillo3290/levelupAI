import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import LearnSkill from "./pages/learn-skill.tsx";
import SignIn from "./pages/sign-in.tsx";
import JobListing from "./pages/job-listing.tsx";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/pages/job-listing">job listing</Link>
        </li>
        <li>
          <Link to="/pages/learn-skill">learn skill</Link>
        </li>
        <li>
          <Link to="/pages/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to LevelUp AI</h1>
      <p>Your personalized learning and career development platform.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/learn-skill" element={<LearnSkill />} />
        <Route path="/pages/sign-in" element={<SignIn />} />
        <Route path="/pages/job-listing" element={<JobListing />} />
      </Routes>
    </>
  );
}

export default App;
