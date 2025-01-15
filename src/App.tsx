import Header from "./components/header/Header";
import Bridge from "./components/bridge/Bridge";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Bridge />
      </main>
    </>
  );
}

export default App;
