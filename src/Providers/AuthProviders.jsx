import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosSecure from '../Hooks/useAxiosSecure';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true)
    const [axiosSecure] = useAxiosSecure();

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      };

   
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            if (loggedUser) {
                axiosSecure
                  .post("/jwt", { email: loggedUser?.email })
                  .then((res) => {
                    console.log(res.data.token);
                    localStorage.setItem('access-token', res.data.token)
                    setLoading(false);
                  });
              }else{
                localStorage.removeItem('access-token')
              }
        })

        return () => {
            return unsubscribe()
        }

    },[])

    const authInfo = {
        registerUser,
        updateUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        user,
        loading
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;