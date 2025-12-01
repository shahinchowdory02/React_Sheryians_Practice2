import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent flex gap-10 justify-center items-center min-h-screen bg-[#a5a5a5] p-10">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
