import { Header } from "../components/Header";
import { Counter } from "../components/Counter";
import { Link } from "react-router-dom";


export function HomePage() {
  return (
    <>
    <main>
      <div className=" py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <Header heading="Word Counter" subHeading="Free online character and word count tool." />
      </div>
      <Counter />
      <div className="text-center">
      <Link to="/Joke" className="text-blue-500 hover:underline text-lg text-center ">
     Back to Word Count
 </Link>
 </div>
     
    </main>
     
 </>
  );
}