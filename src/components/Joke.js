import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Joke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            setJoke(data.value);
        }
        fetchJoke();
    }, []);
    
    return (
        <>
            <section className="m-8 p-6 border border-gray-300 rounded-lg shadow-lg max-w-xl mx-auto bg-yellow-50">
                <p className="text-gray-800 text-lg font-semibold">
                    <span data-testid="jokeHeadline">{joke}</span>
                    <span className="text-2xl text-gray-600"> - Romeo</span>
                </p>
            </section>
            <div className="text-center mt-4">
                <Link to="/" className="text-blue-500 hover:underline text-lg ">
                    Back to Word Count
                </Link>
            </div>
        </>
    )
}
