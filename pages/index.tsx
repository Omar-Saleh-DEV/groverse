import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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

      {/* Hero Image */}
      <div className="relative w-full max-w-4xl h-72 md:h-96 mb-10">
        <Image
          src="/09.jpg" 
          alt="Solar Panels Powering Homes"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Call to Action Button */}
      <Link href="/products">
        <span className="btn-primary">Explore Our Products</span>
      </Link>

      {/* Footer with Spacing */}
      <div className="mb-20 md:mb-40"></div>
      <Footer />
    </div>
  );
}
