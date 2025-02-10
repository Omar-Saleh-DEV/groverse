import Head from "next/head";
import { useCart } from "../components/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Footer from "../components/Footer";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    if (!stripe) return;

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="container page-container py-12">
      <Head>
        <title>Checkout | Groverse Energy</title>
        <meta name="description" content="Complete your purchase securely with Stripe." />
      </Head>

      <h1 className="text-4xl font-bold text-primary text-center mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-semibold text-gray-800">
              Total: <span className="text-green-600">${totalPrice}</span>
            </p>

            {/* Checkout Button with Loading State */}
            <button
              onClick={handleCheckout}
              className="btn-primary mt-4 w-full"
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>

            <button onClick={clearCart} className="btn-secondary mt-4 w-full">
              Clear Cart
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
