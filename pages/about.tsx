import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="container page-container py-12">
      <Head>
        <title>About Us | Groverse Energy</title>
        <meta name="description" content="Learn more about Groverse Energy and our mission to provide clean energy solutions." />
      </Head>

      {/* Why Choose Us Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold text-green-600 border-l-4 border-green-600 pl-4 inline-block">
          Why Choose Us?
        </h2>
        <h1 className="text-4xl font-bold text-primary mt-4">ABOUT US</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          <strong>Groverse</strong> founded <strong>EFF</strong> to provide easy access to clean energy financing in Africa,
          believing that solar energy can be moderate, affordable, and accessible to all. Through extensive research and 
          development, we strive to make renewable energy a reality for everyone.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-lg">
          <h3 className="text-3xl font-bold text-green-400">Our Mission</h3>
          <p className="mt-4 text-gray-300">Our mission is to provide access to clean energy to Africans.</p>
        </div>
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-lg">
          <h3 className="text-3xl font-bold text-green-400">Our Vision</h3>
          <p className="mt-4 text-gray-300">The vision of EFF is to increase access to clean energy across Africa by 30% in 2030.</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-900 text-white py-16 px-6 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-green-400">Our Values</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          The core values of EFF are defined through the acronym itself, emphasizing our mission and vision:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {[
            { title: "E – Empowerment", description: "Empowering underserved communities with sustainable, reliable energy solutions." },
            { title: "F – Fairness", description: "Ensuring affordability and equitable access to renewable energy financing for low-income earners." },
            { title: "F – Future-Oriented", description: "Fostering innovation and sustainability to create a cleaner, greener future." }
          ].map((value, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-white">{value.title}</h3>
              <p className="mt-2 text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 italic mt-10 text-lg max-w-2xl mx-auto">
          These values reflect EFF’s commitment to creating positive, lasting change in the energy landscape.
        </p>
      </section>
      <Footer />
    </div>
  );
}
