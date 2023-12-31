import { useEffect, useRef, useState } from "react";
import Routing from "./utilities/Routing";
import Spinner from "./components/Spinner";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);


    // Destroy Locomotive Scroll on component unmount

    // FIx following
    // 1. on submit form data clear
    // 2. show proper mail submit or error message
    // 3. fix dual sending message in mail
    // 4. get list of items when you're logged in react app
    // 5. load the generated leads in single page
    // 6. add the UTM source and timing
    // 7. add checkboxes multiple select and delete leads
    
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
