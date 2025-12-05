import "./App.css";
import Card from "./components/Card";
import User from "./components/User";
import { FaColonSign } from "react-icons/fa6";

const App = () => {
  const arr = [
    {
      user: "Shahin",
      age: 25,
    },
    {
      user: "Rovin ",
      age: 25,
    },
    {
      user: "Sakib",
      age: 25,
    },
  ];

  return (
    <>
      <div className="parent flex gap-10 justify-center items-center min-h-screen bg-[#a5a5a5] p-10">
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        {arr.map(function (elem) {
          return (
            <div className="text-center">
              {elem.user}
              {elem.age}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
