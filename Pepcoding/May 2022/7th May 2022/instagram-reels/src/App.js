import Feed from './components/Feed';
import Forget from './components/Forget';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { AuthContextProvider, AuthContext } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;