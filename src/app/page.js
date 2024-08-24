import styles from "./page.module.css";
import GreyStrip from "@/components/GreyStrip/GreyStrip";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className={styles.main}>
      <GreyStrip />
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
