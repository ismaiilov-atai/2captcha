import ProductCard from './components/product-card/ProductCard';
import { DATA_FOR_PRODUCT_CARD } from './constants/data';

const products = DATA_FOR_PRODUCT_CARD;

function App() {
  return (
    <div className=' space-y-5 py-3'>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default App;
