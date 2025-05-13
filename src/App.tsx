import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { Product } from './types/types';
import ToteBag from './assets/ToteBag.png';
import NoteBook from './assets/NoteBook.png';
import AfricanPrint from './assets/AfricanPrint.png';
import Socks from './assets/Socks.png';

const products: Product[] = [
  { id: 1, image: ToteBag, name: 'Stay Stylish', description: 'Multipurpose Tote Bag', price: 200 },
  { id: 2, image: NoteBook, name: 'Creatives Delight', description: 'Leather Notebook', price: 8200 },
  { id: 3, image: AfricanPrint, name: 'Color Pop', description: 'African Print', price: 900 },
  { id: 4, image: Socks, name: "Drippy's Corner", description: 'Dream’s Socks', price: 500 },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Navbar />

      <div className="flex justify-center w-full h-auto">
        <div className="h-12 py-2 px-5 lg:w-11/12 w-full">
          <p className="text-lg font-semibold text-black">New Arrivals</p>
        </div>
      </div>

      <div className="flex justify-center w-full h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 lg:w-11/12 w-full">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
