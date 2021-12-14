import "./App.css";

function App() {
  return (
    <div className="container bg-red-400 h-7 px-3">
      <h1 className="text-xl md:text-4xl lg:text-6xl">Hello!</h1>
      <h2 className="bg-indigo-400 md:my-3 mx-3">Hello World!</h2>
      <button className="bg-blue-300 px-4 py-2" onClick={() => console.log("Clicked!")}>Click me!</button>
    </div>
  );
}

export default App;
