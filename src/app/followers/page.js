import styles from "../../app/page.module.css";
import Navigation from "@/components/navigation/navigation";

function Followers() {
  return (
    <div className={styles.home}>
      <section>Welcome to followers page</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}

export default Followers;
