import styles from "../../app/page.module.css";
import Navigation from "@/components/navigation/navigation";

function Trending() {
  return (
    <div className={styles.home}>
      <section>Welcome to trending memes</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}

export default Trending;
