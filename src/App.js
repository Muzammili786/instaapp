import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Home from './page/home/home';
import Comments from "./page/comments/comment";
import Profile from "./page/profile/profile";






// function App() {
//   return (
//     <div className="App">
      
//       <h1>instagram project</h1>
      
      
//     </div>
//   );
// }

function App() {

 

  return (
    <>
    {/* <CollapsibleExample /> */}
   <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Comments" element={<Comments/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    </Routes>
   </Router>
    </>
    
  )
}

export default App;
