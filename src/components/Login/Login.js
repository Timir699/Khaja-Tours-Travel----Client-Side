import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { FcGoogle } from 'react-icons/fc'; 
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    // react-router hooks
    const location = useLocation()
    const history = useHistory()

    // hooks
    const { signInWithGoogle, user, error, success, setSuccess, setError, setUser } = useAuth()

    console.log(user);

    // Functions
    const signInWithGoogleHandler = () => {
        signInWithGoogle()
            .then(result => {
                history.push(location.state?.from || '/')
                setSuccess("Successfully Registered")
                setError('')
            })
            .catch((error) => {
                setSuccess('')
                setError(error.message)
            })
    }

    return (
        <div className="login text-center">

            <h2 className="my-3">{user.email ? "" : "Please log in for manage orders & to add a new service"}</h2>

            <Container>

                {/* registration & Login */}
                    <FcGoogle style={{ fontSize: "50px", cursor: "pointer" }} onClick={signInWithGoogleHandler} />
                   
                    <h3 className="text-danger">{error}</h3>
                    <h3 className="text-success">{success}</h3>

            </Container>
        </div >
    );
};

export default Login;