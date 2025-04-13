
import AboutUs from './AboutUs';
import './App.css';
import { Member } from './Member';

function App() {

const appStyle={backgroundColor:'#3A59D1', textAlign:"center", color:'white'}

const people = [
  { name: "Raju", city: "Jammikunta" },
  { name: "Vaishu", city: "Houseboard Colony" },
  { name: "Abhilash", city: "Valbhapur" },
  { name: "Ram", city: "Hyderabad" },
  { name: "Anu", city: "Karimnagar" },
  { name: "Pooja", city: "Warangal" },
  { name: "Surya", city: "Kazipet" },
  { name: "Meghana", city: "Hanamkonda" },
  { name: "Kiran", city: "Chityal" },
  { name: "Bhavya", city: "Guntur" },
  { name: "Vamsi", city: "Khammam" },
  { name: "Sravani", city: "Nalgonda" },
  { name: "Manoj", city: "Bhimavaram" },
  { name: "Neha", city: "Vijayawada" },
  { name: "Akash", city: "Rajahmundry" },
  { name: "Harsha", city: "Nizamabad" },
  { name: "Deepthi", city: "Adilabad" },
  { name: "Sandeep", city: "Karimnagar" },
  { name: "Lahari", city: "Siddipet" },
  { name: "Rohit", city: "Mahabubabad" },
  { name: "Divya", city: "Warangal" },
  { name: "Tarun", city: "Yellandu" },
  { name: "Keerthi", city: "Huzurabad" },
  { name: "Venky", city: "Manthani" },
  { name: "Madhu", city: "Kothagudem" },
  { name: "Swapna", city: "Sircilla" },
  { name: "Praveen", city: "Bhadrachalam" },
  { name: "Lavanya", city: "Hanamkonda" },
  { name: "Sushma", city: "Metpally" },
  { name: "Rakesh", city: "Jagtial" }
];

  return (
   
    <div>
      <h1 style={appStyle}>First batch is the best batch</h1>
     <AboutUs />
        <div className="members-container">
          <Member name="Raju" city="Hyderabad"/>
          <Member name="Ram" city="jammikunta"/>
          <Member name="vaishu" city="Hanamkonda" />
    </div>
    </div>
  
  );
}

export default App;
