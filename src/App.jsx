import styles from "./style";
import {
  Billing,
  Business,
  Footer,
  Navbar,
  Stats,
  Hero,
} from "./components";
import { useEffect } from "react";
import aos from "aos";

const App = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      delay: 300,
    });
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
