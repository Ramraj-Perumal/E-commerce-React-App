import './App.css';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
