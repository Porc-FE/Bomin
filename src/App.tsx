import { useDarkMode } from "usehooks-ts";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="min-h-screen">
      <Main />
    </div>
  );
}

export default App;
