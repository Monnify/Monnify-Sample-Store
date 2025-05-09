import { useState } from 'react';
import { FaHeart, FaShareAlt, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Product } from '../types';
import Monnify from 'monnify-js'; 

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [liked, setLiked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const handlePayment = () => {
    const monnify = new Monnify({Monnify_production_API_KEY}, {Contract_code}); // Replace with your keys or encode it . 

    monnify.initializePayment({
      amount: product.price,
      currency: 'NGN',
      reference: new Date().getTime().toString(),
      customerFullName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      paymentDescription: `Payment for ${product.name}`,
      metadata: { customData: 'Some custom data' },
      onLoadStart: () => console.log('Monnify SDK loading started'),
      onLoadComplete: () => console.log('Monnify SDK is ready'),
      onComplete: (response: any) => console.log('Transaction complete:', response),
      onClose: (response: any) => {
        console.log('Payment modal closed:', response);
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center z-50">
      <div className="w-full rounded-lg">
        <div className="relative fixed inset-0 bg-black bg-opacity-50 rounded-t-lg">
          <div className="flex justify-center items-center">
            <img src={product.image} alt={product.name} width={400} height={500} />
          </div>
          <FaTimes
            className="absolute top-2 right-2 text-2xl cursor-pointer text-white"
            onClick={onClose}
          />
        </div>

        <div className="bg-white relative rounded-b-lg">
          <div className="p-4 h-56 w-full flex justify-center items-center">
            <div className="w-10/12">
              <p className="mt-2 font-semibold">{product.name}</p>
              <p>This product is from great seller: {product.description}</p>
              <span>Product price: ₦{product.price}</span>

              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={handlePayment}
                >
                  Pay with Monnify
                </button>

                <div className="flex gap-2">
                  <FaHeart
                    className={`text-2xl cursor-pointer ${liked ? 'text-red-500' : 'text-gray-500'}`}
                    onClick={() => setLiked(!liked)}
                  />
                  <FaShareAlt
                    className="text-2xl cursor-pointer text-gray-500"
                    onClick={() => setShareOpen(!shareOpen)}
                  />
                </div>
              </div>

              {shareOpen && (
                <div className="mt-2 flex gap-4">
                  <FaFacebookF size={24} className="text-gray-500 cursor-pointer" />
                  <FaTwitter size={24} className="text-gray-500 cursor-pointer" />
                  <FaInstagram size={24} className="text-gray-500 cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
