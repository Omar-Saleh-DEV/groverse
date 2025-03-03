import { NextApiRequest, NextApiResponse } from "next";

const sampleProducts = [
  { id: "1", name: "Mini Power Station", price: 400000, image: "/mini-power-station.jpg", description: "Suitable for carrying around.", details: "Includes a 300W power station, 50W panel, and 1-year warranty.", highlights: "Entry-level affordability, reliable performance, and peace of mind with every watt." },
  { id: "2", name: "Solar Power Station", price: 600000, image: "/solar-power-station.jpg", description: "Reliable performance and peace of mind.", details: "Includes 250W panel (1-Year Warranty) and 500W portable power station.", highlights: "Reliable performance, and peace of mind with every watt." },
  { id: "3", name: "Starter Solar Package", price: 920000, image: "/starter-solar-package.jpg", description: "Small households and basic needs.", details: "Includes 1kVA Inverter (1-Year Warranty), 3 Solar Panels (5-Year Warranty), and 1 Tubular Battery (2-Year Warranty).", highlights: "Powers: Fans, lights, and laptops effortlessly." },
  { id: "4", name: "Flexible Household Power", price: 1500000, image: "/flexible-household-power.jpg", description: "For small household sizes with basic amenities.", details: "Includes 4 panels (5-Year Warranty), 2 batteries (2-Year Warranty), and 1.5 kVA Inverter (1-Year Warranty).", highlights: "Powers: TVs, fans, lights, and workstations." },
  { id: "5", name: "Light Up Package", price: 1800000, image: "/light-up-package.jpg", description: "Lighting up basic home needs.", details: "Includes 6 panels (5-Year Warranty), 2 batteries (2-Year Warranty), and 2.5 kVA Inverter (1-Year Warranty).", highlights: "Powers: TVs, fridges, fans, lights, and workstations." },
  { id: "6", name: "All-Star Talent Package", price: 1930000, image: "/all-star-talent-package.jpg", description: "Medium households, remote workers, or small offices.", details: "Includes 3kVA Inverter (1-Year Warranty), 6 Solar Panels (5-Year Warranty), and 2 Tubular Batteries (2-Year Warranty).", highlights: "Powers: TVs, fridges, fans, lights, and workstations." },
  { id: "7", name: "Elite Power Package", price: 3250000, image: "/elite-power-package.jpg", description: "For the ultimate energy solution for larger homes and offices.", details: "Includes 5kVA Inverter (1-Year Warranty), 10 Solar Panels (5-Year Warranty), and 4 Tubular Batteries (2-Year Warranty).", highlights: "Powers: ACs, fridges, TVs, lights, and entire workstations." }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow only GET requests
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Set response headers for CORS (allows frontend to fetch from API)
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins (can be restricted later)
  res.setHeader("Access-Control-Allow-Methods", "GET"); // Only allow GET requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow only necessary headers

  // Send products as JSON response
  return res.status(200).json(sampleProducts);
}
