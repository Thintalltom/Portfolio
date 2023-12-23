import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Info from "./Components/Info/Info";
import Work from "./Components/work/Work";
import Built from "./Components/Built/Built";
import NoteWorthy from "./Components/Built/NoteWorthy";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="md:w-screen md:h-screen bg-slate-950 font-sans xs:h-screen xs:h-screen flex justify-center items-center ">
          <PropagateLoader
            color={"#00e600"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="md:w-full md:h-full bg-gray-300  font-sans xs:w-full xs:h-full">
          <Navbar />
          <About />
          <Info />
          <Built />
          <Work />
          
          <NoteWorthy />
        </div>
      )}
    </div>
  );
}

export default App;
