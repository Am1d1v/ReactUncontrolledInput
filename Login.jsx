

function Login(){

    function handleFormSubmit(event){
        event.preventDefault();

        const userData = {username: event.target.username.value,
                          password: event.target.username.value};

        alert(`Login: ${userData.username} Password: ${userData.password}`);    
    }

    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Username: 
                <input type="text" placeholder="Login" name="username"/>
            </label>
            

            <label>Login: 
                <input type="password" placeholder="Login" name="password"/>
            </label>

            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;