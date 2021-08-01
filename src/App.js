import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div>
      <h1>Accessible Tabs</h1>
      <Tabs> 
       <div label="First Tab"> 
         This is first tab 
       </div> 
       <div label="Second Tab"> 
         This is second tab. learn react
       </div> 
       <div label="Third tab"> 
         This is third tab.
       </div> 
     </Tabs>
    </div>
  );
}

export default App;
