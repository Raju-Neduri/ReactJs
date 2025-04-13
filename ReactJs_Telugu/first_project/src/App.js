// import logo from './logo.svg';
import AboutUs from './AboutUs';
import './App.css';
import { Member } from './Member';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h1 style={{backgroundColor:'lightblue', textAlign:"center"}}>First batch is the best batch</h1>
     <AboutUs />

          <Member name="Raju" city="Hyderabad"/>
          <Member name="Ram" city="jammikunta"/>
          <Member name="vaishu" city="Hanamkonda" />
    </div>
  
  );
}

export default App;
