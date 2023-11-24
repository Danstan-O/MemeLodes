import styles from "../../app/page.module.css"
import Link from "next/link";

function Navigation() {
    return (
      <ul>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="/trending">
            Trending memes
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="followers">
            Followers
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="/following">
            Following
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="favourite">
            Favourite memes
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="/discover">
            Discover new memers
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="log-in">
            Log in
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="sign-up">
            Sign Up
          </Link>
        </li>
        <br></br>
        <li>
          <Link className={styles.link} href="profile">
            Profile
          </Link>
        </li>
      </ul>
    );
}

export default Navigation;