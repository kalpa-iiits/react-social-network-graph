import './App.css';
import Profile from './Components/Profile.js'
import Header from './Components/Header.js'

import UserList from './Components/UserList';




function App() {
  var queryParams = new URLSearchParams(window.location.search);
  var user = queryParams.get('user');
  var source = queryParams.get('source');

  if (!user){
    user = "Bibek"
  }
  
  if(source){
    user = source
  }
  
  return (
      <div id = "App"> 
        <Header />
        <Profile user = {user} />
      </div>
  );
}

export default App;

