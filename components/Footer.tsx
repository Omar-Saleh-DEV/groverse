import Link from "next/link";
import { FaPhoneAlt, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-10 px-6 rounded-t-3xl shadow-lg mt-12">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Contact Section */}
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
          <h3 className="text-xl font-bold">Take The Leap</h3>
          <p className="text-lg font-semibold text-gray-700">Contact Groverse Today!</p>
          <p className="text-sm text-gray-600 mt-2">
            To empower employees with All-Star Talent, Groverse shall organize free installation 
            and logistics for employees within Lagos, while discounting all logistics for employees outside Lagos.
          </p>

          {/* Location */}
          <p className="mt-4 text-gray-700">
            <strong>Office Location</strong> <br />
            <span className="font-semibold">Groverse Energy, Lagos Nigeria</span>
          </p>

          {/* Contact Button */}
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer">
              <FaPhoneAlt className="mr-2" />
              <span className="font-semibold">+234 7034373417</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center space-x-6 text-sm">
          <Link href="https://linkedin.com" className="flex items-center space-x-2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
            <FaLinkedin className="text-xl" />
            <span>Groverse</span>
          </Link>
          <Link href="https://groverseenergy.com" className="flex items-center space-x-2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
            <FaGlobe className="text-xl" />
            <span>www.groverseenergy.com</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}
