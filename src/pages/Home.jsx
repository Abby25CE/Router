import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <Link to={"/about"}>Nosotros</Link>
    </>
  );
}
