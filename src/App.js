import Tabs from "./component/Tab";
import Gallery from "./component/Gallery";

const App = () => {
  return (
    <div className="flex h-size w-screen bg-zinc-800 p-10">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
