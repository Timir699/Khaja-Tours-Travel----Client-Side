import initFirebase from "../firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

initFirebase()

const useFirebase = () => {
    // States
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    localStorage.setItem('loading', isLoading)

    const [registerLogin, setRegisterLogin] = useState({
        displayName: '',
        email: '',
        password: '',
    })

    // Firebase Auth Providers

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Google Sign In Functionality

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    // Github Sign In Functionality

    const signInWithGithub = () => {
        setIsLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                setSuccess("Successfully Registered")
                setError('')
            }).catch((error) => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }
    
    // Logout Funtionality
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setSuccess('SuccesFully Logged out')
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Handling Side Effects
    useEffect(() => {
        // setIsLoading(false)
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [auth])


    return {
        signInWithGoogle,
        signInWithGithub,
        user,
        setUser,
        registerLogin,
        setRegisterLogin,
        error,
        setError,
        success,
        setSuccess,
        isLoading,
        setIsLoading,
        logout
    }
}

export default useFirebase