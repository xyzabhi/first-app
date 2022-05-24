import Link from "next/link";

const ClientsPage = () => {
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        <li>
          <Link href="/clients/abh">Abhinav</Link>
        </li>
        <li>
          <Link href="/clients/dhb">Daneil</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientsPage;
