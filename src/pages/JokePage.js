import { Header } from "../components/Header";
import { Joke } from "../components/Joke";

export const JokePage = () => {
  return (
    <main>
      <div className=" py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <Header heading="Tcet Jokes" subHeading="Funny Jokes for jokers." />
      </div>
      <Joke />
    </main>
  )
}
