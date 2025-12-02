import "./App.css";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  return (
    <>
      <div className="parent flex gap-10 justify-center items-center min-h-screen bg-[#a5a5a5] p-10">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <User name="John Doe" />
        <User name="Manik" />
        <User name="Jone" />
      </div>
    </>
  );
};

export default App;
