import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import MoviePage from './components/MoviePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/:movie" element={<MoviePage />} />
    </Routes>
  );
}

export default App;