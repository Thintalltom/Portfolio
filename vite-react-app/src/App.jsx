import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Info from "./Components/Info/Info";
import Work from "./Components/work/Work";
import Built from "./Components/Built/Built";
import NoteWorthy from "./Components/Built/NoteWorthy";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { motion, useScroll } from "framer-motion"
const { scrollYProgress } = useScroll();

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
        <div className="md:w-screen md:h-screen bg-zinc-950 font-sans xs:h-screen xs:h-screen flex justify-center items-center ">
          <PropagateLoader
            color={"#f7fdfc"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <motion.div style={{ scaleX: scrollYProgress }} className="md:w-full md:h-full bg-zinc-950  font-sans xs:w-full xs:h-full">
    
          <About />
          <Info />
          <Built />
          <Work />
          <NoteWorthy />
          <ScrollToTopButton />
        </motion.div>
      )}
    </div>
  );
}

export default App;
