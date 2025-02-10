import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const products = [
  {
    id: "1",
    name: "Mini Power Station",
    price: "₦400,000",
    description: "Suitable for carrying around",
    includes: ["300 watt power station", "50 watt panel", "1 year warranty"],
    highlights: "Entry-level affordability, reliable performance, and peace of mind with every watt.",
  },
  {
    id: "2",
    name: "Solar Power Station",
    price: "₦600,000",
    description: "Reliable performance and peace of mind",
    includes: ["250 watts panel (1-Year Warranty)", "500 watts portable power station"],
    highlights: "Reliable performance, and peace of mind with every watt."
  },
  {
    id: "3",
    name: "Starter Solar Package",
    price: "₦920,000",
    description: "Small households and basic needs.",
    includes: ["1kVA Inverter (1-Year Warranty)", "3 Solar Panels (5-Year Warranty)", "1 Tubular Battery (2-Year Warranty)"],
    highlights: "Powers: Fans, lights, and laptops effortlessly."
  },
  {
    id: "4",
    name: "Flexible Household Power",
    price: "₦1,500,000",
    description: "For small household sizes with basic amenities",
    includes: ["4 panels (5-Year Warranty)", "2 batteries (2-Year Warranty)", "1.5 kVA Inverter (1-Year Warranty)"],
    highlights: "Powers: TVs, fans, lights, and workstations."
  },
  {
    id: "5",
    name: "Light Up Package",
    price: "₦1,800,000",
    description: "Lighting up basic home needs",
    includes: ["6 panels (5-Year Warranty)", "2 batteries (2-Year Warranty)", "2.5 kVA Inverter (1-Year Warranty)"],
    highlights: "Powers: TVs, fridges, fans, lights, and workstations."
  },
  {
    id: "6",
    name: "All-Star Talent Package",
    price: "₦1,930,000",
    description: "Medium households, remote workers, or small offices.",
    includes: ["3kVA Inverter (1-Year Warranty)", "6 Solar Panels (5-Year Warranty)", "2 Tubular Batteries (2-Year Warranty)"],
    highlights: "Powers: TVs, fridges, fans, lights, and workstations."
  },
  {
    id: "7",
    name: "Elite Power Package",
    price: "₦3,250,000",
    description: "For the ultimate energy solution for larger homes and offices.",
    includes: ["5kVA Inverter (1-Year Warranty)", "10 Solar Panels (5-Year Warranty)", "4 Tubular Batteries (2-Year Warranty)"],
    highlights: "Powers: ACs, fridges, TVs, lights, and entire workstations."
  }
];

export default function Products() {
  return (
    <div className="container page-container py-12">
      <Head>
        <title>Our Products | Groverse Energy</title>
        <meta name="description" content="Explore our innovative solar energy solutions." />
      </Head>

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">OUR PRODUCTS/SERVICES</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Groverse provides a suite of innovative solutions aimed at enhancing energy access, affordability,
          and efficiency for the underserved in Nigeria. Our products and services address the needs of
          employers, middle and low-income earners, employees, remote workers, farmers, and more.
        </p>
      </section>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-green-600 text-2xl font-bold mt-2">{product.price}</p>
              <p className="text-gray-500 text-sm italic mt-1">{product.description}</p>
              <hr className="my-4 border-gray-300" />
              <h4 className="font-semibold text-gray-800">What’s included</h4>
              <ul className="list-disc ml-5 text-gray-600">
                {product.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-gray-800 mt-4">Why it’s great:</h4>
              <p className="text-gray-600">{product.highlights}</p>
            </div>
            
            {/* View Details Button Always at Bottom */}
            <Link href={`/product/${product.id}`}>
              <span className="btn-primary mt-4 inline-block cursor-pointer text-center w-full py-3 rounded-lg">View Details</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Key Benefits Section */}
      <section className="bg-gray-900 text-white py-16 px-6 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-green-400">Key Benefits</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          EFF by Groverse is designed to bridge the gap in energy access and affordability for the underserved across Nigeria.
          Here’s a look at the key benefits we offer:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto text-center">
          {[
            "Affordable access to clean energy",
            "Financial Flexibility",
            "Improved productivity",
            "Empowerment of remote workers and MSMEs",
            "Reduction in carbon emission",
            "Cheap financing",
            "Enhanced Client Engagement"
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
              <h3 className="text-md font-medium text-white">{benefit}</h3>
            </div>
          ))}
        </div>
        
        <p className="text-gray-400 italic mt-10 text-lg max-w-2xl mx-auto">
          Through these benefits, Groverse is shaping an energy ecosystem that prioritizes accessibility, security, and user empowerment across Nigeria.
        </p>
      </section>
      <Footer />
    </div>
  );
}

