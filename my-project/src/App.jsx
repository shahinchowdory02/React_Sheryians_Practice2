import "./App.css";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 95,
      location: "Menlo Park, California",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: 40,
      location: "Cupertino, California",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 weeks ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: 55,
      location: "Seattle, Washington",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 120,
      location: "Los Gatos, California",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "1 week ago",
      tag1: "Internship",
      tag2: "Entry Level",
      payPerHour: 30,
      location: "Mountain View, California",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 90,
      location: "Redmond, Washington",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: 60,
      location: "Austin, Texas",
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      datePosted: "8 weeks ago",
      tag1: "Contract",
      tag2: "Senior Level",
      payPerHour: 70,
      location: "New York, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "2 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 45,
      location: "Austin, Texas",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      tag1: "Part Time",
      tag2: "Mid Level",
      payPerHour: 50,
      location: "San Jose, California",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-10 m-auto text-center bg-gray-400">
        {jobOpenings.map(function (elem) {
          return (
            <Card
              company={elem.companyName}
              post={elem.post}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              payPerHour={elem.payPerHour}
              location={elem.location}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
