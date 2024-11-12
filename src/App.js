import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pet/component/pages/HomePage';
import PetSearchPage from './pet/component/pages/PetSearchPage';
import PetMapPage from './pet/component/pages/PetMapPage';
import LoginPage from './pet/component/pages/LoginPage';
import SignUpPage from './pet/component/pages/SignUpPage.jsx';
import { AuthProvider } from './pet/component/AuthContext';
import PetReviewPage from './pet/component/pages/PetReviewPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pet-search" element={<PetSearchPage />} />
          <Route path="/pet-map" element={<PetMapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/pet-review" element={<PetReviewPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
