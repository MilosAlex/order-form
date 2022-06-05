import OrderForm from './orderForm/OrderForm';
import points from './points.json';

function App() {
  return (
    <OrderForm points={points} setResult={(result) => console.log(result)}/>
  );
}

export default App;
