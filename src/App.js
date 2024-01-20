import { Provider } from 'react-redux';
import './App.css';
import Wallet from './components/Wallet/Wallet';
import store from './Redux/Store';
import Transactions from './components/Transactions/Transactions';


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Wallet />
        {/* <Transactions/> */}
      </div>
    </Provider>
  );
}

export default App;
