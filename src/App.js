import logo from './logo.svg';
import './App.css';
import RegistrationForm from './component/registration';
import Dashboard from './component/list';

function App() {
  return (
    <div className="App">
      <RegistrationForm></RegistrationForm>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
