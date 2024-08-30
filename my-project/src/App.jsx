import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="gap-4 columns-3 ">
          <img src="/Sydney.jpg" className="w-96  aspect-video" />
          <img src="/Sydney.jpg" className="w-96 aspect-square" />
          <img src="/Sydney.jpg" className="w-96 aspect-video" />
          <img src="/Sydney.jpg" className="w-96 aspect-video" />
          <img src="/Sydney.jpg" className="w-96 aspect-video" />
        </div>
      </div>
    </>
  );
}

export default App;
