import { Provider } from 'react-redux';
import './App.css';
import Wallet from './components/Wallet/Wallet';
import store from './Redux/Store';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Deposit from './components/Deposit/Deposit';
import Withdraw from './components/Withdraw/Withdraw';
import Transactions from "./components/Transactions/Transactions";
import MainLayout from './Layouts/MainLayout';


function App() {
  const routes = createBrowserRouter([{
    path: '',
    element: <MainLayout/>,
    children: [
      { index:true, element: <Wallet /> },
      { path: 'home', element: <Wallet /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'withdraw', element: <Withdraw /> },
      { path: 'transactions', element: <Transactions /> },
    ]
  }])
  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  );
}

export default App;
