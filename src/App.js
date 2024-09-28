import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateStudent from './pages/CreateStudent';
import ListStudents from './pages/ListStudents';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/list-students" element={<ListStudents />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
