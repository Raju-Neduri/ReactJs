
import AboutUs from './AboutUs';
import './App.css';
import { Member } from './Member';

function App() {
  return (
   
    <div>
      <h1 style={{backgroundColor:'#3A59D1', textAlign:"center", color:'white'}}>First batch is the best batch</h1>
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
