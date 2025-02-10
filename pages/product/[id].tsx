import { useRouter } from "next/router";
import Head from "next/head";
import { useCart } from "../../components/CartContext"; // Import cart hook
import Link from "next/link";

const sampleProducts = [
  { id: "1", name: "Mini Power Station", price: 400000, image: "/mini-power-station.jpg", description: "Suitable for carrying around.", details: "Includes a 300W power station, 50W panel, and 1-year warranty.", highlights: "Entry-level affordability, reliable performance, and peace of mind with every watt." },
  { id: "2", name: "Solar Power Station", price: 600000, image: "/solar-power-station.jpg", description: "Reliable performance and peace of mind.", details: "Includes 250W panel (1-Year Warranty) and 500W portable power station.", highlights: "Reliable performance, and peace of mind with every watt." },
  { id: "3", name: "Starter Solar Package", price: 920000, image: "/starter-solar-package.jpg", description: "Small households and basic needs.", details: "Includes 1kVA Inverter (1-Year Warranty), 3 Solar Panels (5-Year Warranty), and 1 Tubular Battery (2-Year Warranty).", highlights: "Powers: Fans, lights, and laptops effortlessly." },
  { id: "4", name: "Flexible Household Power", price: 1500000, image: "/flexible-household-power.jpg", description: "For small household sizes with basic amenities.", details: "Includes 4 panels (5-Year Warranty), 2 batteries (2-Year Warranty), and 1.5 kVA Inverter (1-Year Warranty).", highlights: "Powers: TVs, fans, lights, and workstations." },
  { id: "5", name: "Light Up Package", price: 1800000, image: "/light-up-package.jpg", description: "Lighting up basic home needs.", details: "Includes 6 panels (5-Year Warranty), 2 batteries (2-Year Warranty), and 2.5 kVA Inverter (1-Year Warranty).", highlights: "Powers: TVs, fridges, fans, lights, and workstations." },
  { id: "6", name: "All-Star Talent Package", price: 1930000, image: "/all-star-talent-package.jpg", description: "Medium households, remote workers, or small offices.", details: "Includes 3kVA Inverter (1-Year Warranty), 6 Solar Panels (5-Year Warranty), and 2 Tubular Batteries (2-Year Warranty).", highlights: "Powers: TVs, fridges, fans, lights, and workstations." },
  { id: "7", name: "Elite Power Package", price: 3250000, image: "/elite-power-package.jpg", description: "For the ultimate energy solution for larger homes and offices.", details: "Includes 5kVA Inverter (1-Year Warranty), 10 Solar Panels (5-Year Warranty), and 4 Tubular Batteries (2-Year Warranty).", highlights: "Powers: ACs, fridges, TVs, lights, and entire workstations." }
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart(); // Get cart function

  const product = sampleProducts.find((p) => p.id === id);
  const similarProducts = sampleProducts.filter((p) => p.id !== id).slice(0, 3);

  if (!product) {
    return <div className="text-center text-xl p-10">Product not found.</div>;
  }

  return (
    <div className="container page-container py-12">
      <Head>
        <title>{product.name} | Groverse Energy</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold text-primary">{product.name}</h1>
          <p className="text-green-600 text-lg font-bold mt-2">₦{product.price.toLocaleString()}</p>
          <p className="mt-6 text-gray-700">{product.description}</p>
          <p className="text-gray-600 mt-4"><strong>Details:</strong> {product.details}</p>
          <p className="text-gray-600 mt-4"><strong>Why it’s great:</strong> {product.highlights}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Similar Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {similarProducts.map((similar) => (
            <div key={similar.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">{similar.name}</h3>
              <p className="text-green-600 text-lg font-bold mt-2">₦{similar.price.toLocaleString()}</p>
              <p className="text-gray-500 text-sm italic mt-1">{similar.description}</p>
              <Link href={`/product/${similar.id}`}>
                <span className="btn-primary mt-4 inline-block cursor-pointer text-center w-full py-3 rounded-lg">View Details</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
