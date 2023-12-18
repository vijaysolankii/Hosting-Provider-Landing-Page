import Routing from "./utilities/Routing";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollContainerRef = useRef(null);
  use

  useEffect(() => {
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
    };
  }, []);
  return (
    <div ref={scrollContainerRef} data-scroll-container>
      <Routing />
    </div>
  );
}

export default App;
