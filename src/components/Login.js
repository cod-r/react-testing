import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Home from "./Home";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        setAuth(true);
        event.preventDefault();
    }

    return (
        <div>
            {!auth && <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
            }
            {auth && <Home username={username}/>}
        </div>
    );
}
