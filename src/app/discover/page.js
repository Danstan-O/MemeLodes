import styles from "../../app/page.module.css";
import Navigation from "@/components/navigation/navigation";

function Discover() {
  return (
    <div className={styles.home}>
      <section>Discover new memers</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}

export default Discover;
