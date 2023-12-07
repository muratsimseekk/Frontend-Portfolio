import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { selectData } from "./store/reducer";
function App() {
  const tema = useSelector((state) => state.theme);

  return (
    <div
      className={`${
        tema == true
          ? "dark h-screen max-w-screen-2xl "
          : "h-screen max-w-screen-2xl"
      } `}
    >
      <Header />
      <Information />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
