import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-center text-center page-container">
      <Head>
        <title>Groverse Energy</title>
        <meta name="description" content="Solar Energy Solutions for a Sustainable Future" />
      </Head>

      {/* Title */}
      <h1 className="text-5xl font-bold text-primary mb-6">Groverse Energy</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Powering the future with clean, sustainable, and affordable solar energy solutions.
      </p>

      {/* Call to Action Button */}
      <Link href="/products">
        <span className="btn-primary">Explore Our Products</span>
      </Link>

      {/* Spacer for Future Image */}
      <div className="h-60 md:h-96 w-full flex items-center justify-center my-16">
        {/* Placeholder for future image */}
        <div className="bg-gray-200 rounded-lg w-5/6 h-full flex items-center justify-center text-gray-500 text-lg">
           Image Here
        </div>
      </div>

      {/* Footer with Spacing */}
      <div className="mb-20 md:mb-40"></div>
      <Footer />
    </div>
  );
}
