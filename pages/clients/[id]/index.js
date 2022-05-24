import { useRouter } from "next/router";

const ClientPageList = () => {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    router.push("/clients/abhinav/a");
  }
  return (
    <div>
      <h1>Client Page List</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientPageList;
