import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: { id: 5 },
            }}
          >
            Portfoilio
          </Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
