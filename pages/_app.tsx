import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import { CartProvider } from "../components/CartContext";
import { useRouter } from "next/router";

// Dynamically import framer-motion to prevent SSR issues
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CartProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <MotionDiv
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-16">
            <Component {...pageProps} />
          </div>
        </MotionDiv>
      </AnimatePresence>
    </CartProvider>
  );
}

export default MyApp;
