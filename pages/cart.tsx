import Head from "next/head";
import Link from "next/link";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container page-container py-12">
      <Head>
        <title>Your Cart | Groverse Energy</title>
        <meta name="description" content="Review your selected solar products." />
      </Head>

      <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  ✖ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold text-gray-800">
              Total: <span className="text-green-600">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </p>

            {/* Proceed to Checkout Button */}
            <Link href="/checkout">
              <span className="btn-primary mt-4 inline-block cursor-pointer">Proceed to Checkout</span>
            </Link>

            {/* Clear Cart Button */}
            <button onClick={clearCart} className="btn-secondary ml-4">
              Clear Cart
            </button>
          </div>
        </div>
      )}

      {/* Back to Products Link */}
      <div className="text-center mt-8">
        <Link href="/products">
          <span className="text-green-600 hover:underline cursor-pointer">← Continue Shopping</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
