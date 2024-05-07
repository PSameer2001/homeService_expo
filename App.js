import React,{ useState, useEffect } from 'react';
import AuthStack from './src/navigation/AuthStack';
import AppStack1 from './src/navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './src/Authentication/FirebaseConfig';

const App = () => {
  const [user, setuser] = useState("")

  useEffect(() => {
       auth.onAuthStateChanged((authUser) => {
            if(authUser) {
              setuser(authUser)
            }else{
              setuser("")
            }
        });  
    }, []);

  return(
    <NavigationContainer>
       {
        user ? <AppStack1 /> : <AuthStack />
      }
    </NavigationContainer>
  
  )
    
}

export default App;