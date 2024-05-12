import { useState } from "react"
import "./login.css"

function Login() {

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null)

    const handleInputChange = (name, value) => {
        setError(null)
        setLoginData(prev => {
            return { ...prev, [name]: value }; 
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(loginData)
        if (loginData.email === "" || loginData.password === "") {
            setError("All fields are required!")
            return
        }

        // perform backend operation here
        //if success redirect to home
        //if fail set error

    }

    return (
        <section className="auth">
            <form onSubmit={handleLogin}>
                <h1 className="auth-title">Login to continue</h1>
                {error && <p className="auth-error">{error}</p>}
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={loginData?.email}
                        className="auth-input" 
                        placeholder="Eg., john@gmail.com"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                        
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={loginData?.password}
                        id="password" 
                        className="auth-input" 
                        placeholder="********"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </div>
                <small className="auth-info">Forgot password?</small>
                <button className="auth-btn">Login</button>
            </form>
        </section>
    )
}

export default Login;