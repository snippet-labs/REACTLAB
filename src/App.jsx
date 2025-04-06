import Greeting from "./components/Basics/Greeting";
import Counter1 from "./components/Hooks/useEffectHook/Counter1";
import Counter from "./components/Hooks/useStateHook/Counter";
import ThemeToggler from "./project/ThemeToggler";
import ModifiedCounter from "./components/Hooks/counter/Counter"

const App = () => {
  return (
    <>
    {/* <ThemeToggler/> */}
    <ModifiedCounter/>
    </>
  )
};

export default App;
