import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Login from "./pages/user/auth/Login"
import Home from "./pages/Home"
import Signup from "./pages/user/auth/signUp"
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App