// import Image from 'next/image'
import Navigation from "@/components/navigation/navigation";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <section>Welcome Home</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}
