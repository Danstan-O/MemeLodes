import styles from "../../app/page.module.css";
import Navigation from "@/components/navigation/navigation";

function Favourite() {
  return (
    <div className={styles.home}>
      <section>Welcome to favourites page</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}

export default Favourite;
