import { useEffect, useRef, useState } from "react";
import Routing from "./utilities/Routing";
import Spinner from "./components/Spinner";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
  }, []);
  return <>{loading ? <Spinner /> : <Routing />}</>;
}

export default App;
