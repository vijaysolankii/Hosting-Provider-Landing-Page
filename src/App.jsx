import { useState } from "react";
import Routing from "./utilities/Routing";
import Spinner from "./components/Spinner";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      // Add other Locomotive Scroll options as needed
    });

    // Destroy Locomotive Scroll on component unmount
    return () => {
      if (scroll) {
        scroll.destroy();
      }
      return clearInterval(timer);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div ref={scrollContainerRef} data-scroll-container>
          <Routing />
        </div>
      )}
    </>
  );
}

export default App;
