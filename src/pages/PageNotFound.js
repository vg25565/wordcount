import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images.png";

export const PageNotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <section className="text-center p-6">
        <div className="mb-4">
          <p data-testid="pnfText" className="text-2xl font-semibold mb-4">Oops - Page Not Found!</p>
          <img src={PageNotFoundImage} alt="Page Not Found" className="mx-auto mb-4 rounded-lg shadow-lg" />
          <Link to="/">
            <button 
              data-testid="homeBtn" 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Go Back To Word Counter
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
