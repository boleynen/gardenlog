import React from 'react';
import Signup  from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';


const App = () =>{
    return(
        <AuthProvider>
            <Container style={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-center">
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Signup />
                </div>
            </Container>
        </AuthProvider>
    )
}

export default App;