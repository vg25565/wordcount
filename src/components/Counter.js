import { useRef, useState } from "react";

export const Counter = () => {
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);

  const textRef = useRef();

  const handleCount = () => {
    const value = textRef.current.value;
    setCharLength(value.length);
    value.length ? setWordLength(value.trim().split(" ").length) : setWordLength(0);
  }

  const handleButton = () => {
    textRef.current.value = "";
    handleCount();
  }

  return (
    <section className="m-8 p-6 border border-gray-300 rounded-lg shadow-lg max-w-xl mx-auto bg-white">
      <textarea 
        onChange={handleCount} 
        ref={textRef} 
        data-testid="textArea" 
        placeholder="Type or paste your text here..." 
        className="border border-gray-300 w-full h-48 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      
      <div className="flex justify-end mt-4">
        <button 
          onClick={handleButton} 
          data-testid="clearBtn" 
          disabled={!charLength} 
          className={`px-4 py-2 rounded-lg font-semibold text-white ${charLength ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Clear
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          <span data-testid="charLength">Characters: {charLength}</span> | 
          <span data-testid="wordLength" className="ml-2">Words: {wordLength}</span>
        </p>
      </div>
    </section>
  );
}
