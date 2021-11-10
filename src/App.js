import { BrowserRouter } from 'react-router-dom';
import ProductsContext from './contexts/ProductsContext';
import AppRoutes from './routes';

function App() {
    return (
        <ProductsContext>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ProductsContext>
    );
}

export default App;
