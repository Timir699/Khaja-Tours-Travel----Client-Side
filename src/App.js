import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Components from './components/Components';
import ServiceProvider from './context/ServiceProvider';
import CartProvider from './context/CartProvider';
import AuthProvider from './context/AuthProvider';
import PassProvider from './context/PassProvider';
import DisplayServicesProvider from './context/DisplayServicesProvider'

function App() {
  return (
    <div className="App">
      <DisplayServicesProvider>
        <PassProvider>
          <AuthProvider>
            <CartProvider>
                <ServiceProvider>
                  <Components />
                </ServiceProvider>
            </CartProvider>
          </AuthProvider>
        </PassProvider>
      </DisplayServicesProvider>
    </div>
  );
}

export default App;
