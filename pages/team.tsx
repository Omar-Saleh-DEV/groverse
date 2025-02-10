import Head from "next/head";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Bethel Obi",
    role: "CEO",
    image: "/team-bethel.jpg",
    description:
      "As the CEO and visionary behind Groverse, Bethel focuses on providing reliable energy solutions to underserved communities in Nigeria. With a deep commitment to improving accessibility to clean energy for middle- and low-income earners, Bethel leads Groverse’s efforts to increase the adoption of clean energy by financing Nigerians."
  },
  {
    name: "Divinegift Soetan",
    role: "COO",
    image: "/team-divinegift.jpg",
    description:
      "Divinegift serves as the Chief Operating Officer and business development manager, overseeing the day-to-day operations at Groverse. With expertise in operational management, Divinegift is instrumental in scaling Groverse’s services and ensuring efficient delivery of energy solutions to diverse communities across Nigeria."
  },
  {
    name: "Elijah Kolawole",
    role: "CTO",
    image: "/team-elijah.jpg",
    description:
      "As the Chief Technology Officer, Elijah Kolawole leads Groverse’s technological innovations, including the development of blockchain-based financing platforms. Elijah’s vision for integrating technology with real-life use cases is key to Groverse’s mission of offering secure, scalable solutions that improve energy access."
  }
];

export default function Team() {
  return (
    <div className="container page-container py-12">
      <Head>
        <title>Our Team | Groverse Energy</title>
        <meta name="description" content="Meet the leadership team at Groverse Energy." />
      </Head>

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">MEET THE TEAM</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Groverse leadership team is a dynamic group of professionals committed to transforming energy access in Nigeria.
        </p>
      </section>

      <div className="space-y-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-900 rounded-lg shadow-lg ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-green-400"
            />
            <div className="flex-1">
              <div className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-lg inline-block mb-4">
                {member.name} ({member.role})
              </div>
              <p className="text-gray-300">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
