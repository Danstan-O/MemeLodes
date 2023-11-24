import styles from "../../app/page.module.css";
import Navigation from "@/components/navigation/navigation";

function Following() {
  return (
    <div className={styles.home}>
      <section>Welcome to followings page</section>
      <section className={styles.navigation}>
        <Navigation />
      </section>
    </div>
  );
}

export default Following;
