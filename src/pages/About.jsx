import AssetImage from "../assets/Yo.jpeg";
import { Link } from "../components/Link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          className="mb-4 rounded-full size-20"
          src={AssetImage}
          alt="avatar"
          width={70}
          height={70}
        />
      </div>

      <p>Hola, Me llamo Abby y esto es un clon de Router </p>
      <Link to={"/"}>Home</Link>
    </>
  );
}
