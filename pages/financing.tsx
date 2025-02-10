import Head from "next/head";
import Footer from "../components/Footer";

export default function Financing() {
  return (
    <div className="container page-container py-12">
      <Head>
        <title>Solar Financing Packages | Groverse Energy</title>
        <meta name="description" content="Explore our flexible solar financing options for a sustainable future." />
      </Head>

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">SOLAR FINANCING PACKAGES</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          The following are examples of sample plans that can be set up. These are guidelines. For employer-financed plans, the employer retains the interests or passes them on to their employees.
        </p>
      </section>

      {/* Financing Options */}
      <div className="space-y-8">
        {financingOptions.map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block font-bold">
              {option.title}
            </h3>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Durations</th>
                  <th className="p-3 text-left">Principal</th>
                  <th className="p-3 text-left">Finance</th>
                  <th className="p-3 text-left">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {option.plans.map((plan, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{plan.duration}</td>
                    <td className="p-3">{plan.principal}</td>
                    <td className="p-3">{plan.finance}</td>
                    <td className="p-3">{plan.monthlyPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

const financingOptions = [
  {
    title: "50% down options (Principal: ₦1.8m, Installation, ₦900,000 down)",
    plans: [
      { duration: "12%", principal: "900,000", finance: "54,000", monthlyPayment: "159,000" },
      { duration: "16%", principal: "900,000", finance: "144,000", monthlyPayment: "87,000" },
      { duration: "24%", principal: "900,000", finance: "342,000", monthlyPayment: "52,000" },
    ],
  },
  {
    title: "40% down options (Principal: ₦1.8m, Installation, ₦800,000 down)",
    plans: [
      { duration: "15%", principal: "1,000,000", finance: "75,000", monthlyPayment: "179,000" },
      { duration: "20%", principal: "1,000,000", finance: "200,000", monthlyPayment: "100,000" },
      { duration: "22%", principal: "1,000,000", finance: "440,000", monthlyPayment: "60,000" },
    ],
  },
  {
    title: "30% down options (Principal: ₦1.8m, Installation, ₦600,000 down)",
    plans: [
      { duration: "18%", principal: "1,200,000", finance: "108,000", monthlyPayment: "218,000" },
      { duration: "22%", principal: "1,200,000", finance: "264,000", monthlyPayment: "122,000" },
      { duration: "25%", principal: "1,200,000", finance: "600,000", monthlyPayment: "75,000" },
    ],
  },
  {
    title: "20% down options (Principal: ₦1.8m, Installation, ₦360,000 down)",
    plans: [
      { duration: "20%", principal: "1,440,000", finance: "144,000", monthlyPayment: "179,000" },
      { duration: "24%", principal: "1,440,000", finance: "316,000", monthlyPayment: "100,000" },
      { duration: "28%", principal: "1,440,000", finance: "720,000", monthlyPayment: "60,000" },
    ],
  },
  {
    title: "15% down options (Principal: ₦1.8m, Installation, ₦300,000 down)",
    plans: [
      { duration: "20%", principal: "1,500,000", finance: "165,000", monthlyPayment: "277,500" },
      { duration: "24%", principal: "1,500,000", finance: "390,000", monthlyPayment: "157,500" },
      { duration: "28%", principal: "1,500,000", finance: "900,000", monthlyPayment: "100,000" },
    ],
  },
];
