import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  console.log(router); // 이렇게 콘솔에 찍으면

  return (
    <nav>
      <Link href="/">
        <a
          style={{ color: router.pathname === "/" ? "red" : "orange" }}
          className="red"
        >
          home
        </a>
      </Link>
      <Link href="/farm">
        <a style={{ color: router.pathname === "/farm" ? "red" : "orange" }}>
          MY FARM
        </a>
      </Link>
    </nav>
  );
}
