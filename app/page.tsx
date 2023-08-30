import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import TechStack from "@/components/texh_stack";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <TechStack />
    </main>
  );
}
