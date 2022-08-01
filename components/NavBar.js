import Link from "next/link";
import { useRouter } from "next/router";

// css 모듈 사용하기
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  console.log(router); // 이렇게 콘솔에 찍으면

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
          className={`
          ${styles.under} ${router.pathname === "/" ? styles.active : ""}`}
        >
          HOME
        </a>
      </Link>
      <Link href="/farm">
        <a
          className={[
            styles.under,
            router.pathname === "/farm" ? styles.active : "",
          ].join(" ")}
        >
          MY FARM
        </a>
      </Link>
    </nav>
  );
}
