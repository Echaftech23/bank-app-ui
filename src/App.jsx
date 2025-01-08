import styles from "./style";
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
      Hi there 👋
    </div>
  );
};

export default App;
