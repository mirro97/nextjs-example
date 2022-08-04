import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
      </Link>

      <style jsx global>
        {`
            nav {
              display: flex;
              justify-content: center;
              background-color: #588068;
              color: #fff;
              padding: 0px 20px;
              font-weight: bold;
            }

           a {
              text-decoration: underline;
              padding: 19px 14px 
            }

            .active {
              color: #e5b0a4;
            }

          }
        `}
      </style>
    </nav>
  );
}
