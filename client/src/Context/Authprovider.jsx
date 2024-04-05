import React, { useState, createContext ,useEffect} from 'react'; // Import createContext from react
import app from "../FireBase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider =  new GoogleAuthProvider()

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwitGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth , googleProvider)
    }

    // const signUpWithGmail = () => {
    //     return  sigInWi
    // }


    useEffect(() =>{
        const unsubScribe = onAuthStateChanged(auth,currentUser =>{
           console.log(currentUser) ;
           setUser(currentUser);
           setLoading(false);
        });
        return ()=>{
            return unsubScribe()
        }

        
    } ,[])

    const  login  =(email,password) =>{
        setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout = () =>{
        return signOut(auth)
     }
    
    const authInfo = { 
        user,// Fix typo, should be authInfo instead of constauthinfo
        createUser,
        loginwitGoogle,
        loading,
        login,
        Logout
    }
 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider; // Fix typo, should be AuthProvider instead of Authprovider
