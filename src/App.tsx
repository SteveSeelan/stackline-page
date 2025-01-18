import Header from './Components/Header/Header';
import useLoadProduct from './Components/LoadProduct';
import ProductCard from './Components/Product/ProductCard';
import SalesGraphCard from './Components/Sales/SalesGraphCard';
import SalesTable from './Components/Sales/SalesTable';
import { Product, Sales } from './types';
import styles from './app.module.css';

const App = () => {
  const { data, loading, error } = useLoadProduct('https://endpoint.com/api/v1/product?id=1234');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const product = data;
  if (product === undefined || null) return <p>No data found</p>;
  console.log(product.sales);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '15px', padding: '20px' }}>
        <ProductCard {...product as Product} />
        <div className={styles.dataContainer}>
          <SalesGraphCard data={product.sales as Sales[]} />
          <SalesTable data={product.sales as Sales[]} />
        </div>
      </div>
    </div>
  );
};

export default App;