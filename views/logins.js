function Login() {
    const [info, setInfo] = React.useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
       const {name, value} = e.target;
      // console.log({name, value})
       setInfo((state) => ({...state, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        show();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
    
        try {
            const result = await fetch('https://junior-capstone-backend.onrender.com/api/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            email,
            password
        })
    })
        const data = await result.json();
       // console.log(data.Message);
        if(result.status == 200) {
            hide();
            const token = data.token;
            const parts= token.split('.');
            const payload = JSON.parse(atob(parts[1]))
            console.log(payload.user.id); 
            localStorage.setItem('auth-token', token);
             if(payload.user.id == '63de379a123b0ef109245c47') {
                 window.location.href = './admin.html';
             }
             else {
                 window.location.href = './index.html';
             }
        }
        else  {
            hide();
            //swal(data.Message);
            swal(data.Message, "Try again!", "error")
        }
            
        } catch (error) {
            console.log(error);
            
        }
    
    }

    return(
        <section className="login">
        <form className="login_form" id="login_form" name="form" onSubmit={handleSubmit}>
            <h3>ADMIN LOGIN</h3>
            <div>
            <label htmlFor="">Email</label> <br></br>
            <input type="text" id="email" name="email" onChange={handleChange} autoComplete="off"/><br></br>
            </div>
            <div id="email_error">Please Fill Your Email</div>
            <div>
                <label htmlFor="">Password</label> <br></br>
                <input type="password" id="password" name="password" onChange={handleChange}/><br></br>
            </div>
            <div id="pass_error">Please Fill Your Password</div>
            <button type="submit">Login</button>
            <div className="sign">
                <p>Not a member, click here to Sign up</p><a href="signup.html">Sign Up</a>
            </div>
        </form>
    </section>
    )
}


function show() {
    document.getElementById('load').style.visibility ="visible";
    document.querySelector('body').style.visibility ="hidden";
}

function hide() {
    document.getElementById('load').style.visibility="hidden";
    document.querySelector('body').style.visibility ="visible";
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Login));