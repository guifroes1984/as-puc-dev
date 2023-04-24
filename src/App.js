import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './rotas';

function App() {
  return (
    <Router>
      <Rotas />
    </Router>
  );
}

export default App;

/** link é <Link to="/cadastro">cadastro</link> */
