import './index.css';
import LayoutComponent from './components/LayoutComponent';
import { Route, Switch } from 'react-router-dom';
import AccountBalance from './pages/AccountBalance';
import Customers from './pages/Customers';



import './styles/table.css';


function App() {
  
  
  return (
		<>
			<Switch>
				<LayoutComponent>
					<Route exact path="/" component={AccountBalance} />
					<Route exact path="/customers" component={Customers} />

				</LayoutComponent>
			</Switch>
		</>
  );
}

export default App;
