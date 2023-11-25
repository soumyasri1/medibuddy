import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./signup";
import Login from "./login";
import MedicineReminderApp from "./reminderApp";
import About from "./About";
import Home from "./Home";
import Exercise from "./Exercise";
import Footer from "./Footer";
import { auth } from "./firebase";
import "./App.css";
const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onSignOut={handleSignOut} />
        <Routes>
          {user ? (
            <>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route
                path="/medicine-reminder"
                element={<MedicineReminderApp />}
              />
              {/* Redirect to the medicine reminder if no match */}
              <Route path="/*" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              {/* Redirect to Signup if no match */}
              <Route path="/*" element={<Navigate to="/Signup" />} />
              
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
