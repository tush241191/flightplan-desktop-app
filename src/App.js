import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-black h-screen flex items-center">
		<div className="mx-auto flex justify-center">
			<button className="px-4 py-1 bg-green-400 text-white rounded">Click</button>
		</div>
        {/* <Link className="App-link" to="/about">Link to the About Page</Link> */}
    </div>
  );
}

export default App;
