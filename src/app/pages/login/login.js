import React, {useState} from "react";
import Input from "../../components/UI/Input/Input";
import './style.css';
import {useLocation, useNavigate} from "react-router-dom";
import config from "../../config";
import axios from "axios";


function Login  (props) {

    const navigate = useNavigate();
    const location=useLocation();
    const [isLoading, setIsLoading]=useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        loginErrorMessage: null
    });

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: null
        });
    };

    const handleSubmit =  ( e) => {
        const {email, password} = values;
        let valid = true;
        let emailMessage = null;
        let passwordMessage = null;

        if (!email) {
            emailMessage = "Email is required";
            valid = false
        }

        if (email) {
            const emailReg =/\w+(\.|-|_)?\w+@\w+\.\w{2,3}/;
            if (!emailReg.test(email)) {
                emailMessage = "Invalid email";
                valid = false
            }
        }

        if (!password) {
            passwordMessage = "Password is required";
            valid = false
        }

    if (password) {
//             /*const strongPassRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//             if (!strongPassRegex.test(password)) {
//                 passwordMessage = 'Password  must contain at least 1 lowercase, uppercase character, 1 number and 1 special character, must be eight characters or longer';*/
            if (password.length < 8) {
                passwordMessage = 'Password should contain more than 8 characters'
                valid = false
            }
         }

        setErrors({
            email: emailMessage,
            password: passwordMessage,
        });


        // tokens: response.data.tokens

        if (valid) {
            setIsLoading(true);
            console.log("hi")
            axios.post(`${config.baseUrl}/auth/login/`, values)
                .then  (response  =>  {
                  localStorage.setItem('tokens', JSON.stringify(response.data.tokens))
                    props.setToken(localStorage.getItem("tokens"))
                    navigate('/search');
                    console.log(location.pathname);
                    console.log(response , "response login");
                    setIsLoading(false);
                }).catch(error => {
                if (error.response.status >= 400 && error.response.status < 499) {
                    setErrors({
                        loginErrorMessage: "Password or email isn't correct"
                    })
                } else {
                    setErrors({
                        loginErrorMessage: "Something went wrong"
                    })
                }
            })
        }
            }

    const handleKeyPress = event => {
        if (event.key == 'Enter') {
            handleSubmit()
        }
    }


    console.log(localStorage.getItem('tokens') , "token get")

    return(
        <main className={"mainClassLogin"}>
            <div className={"loginBox"}>
                <Input
                    label="Email"
                    error={errors.email}
                    input={{
                        id:"email",
                        type:"email",
                        name:"email",
                        // placeholder:"",
                        value:values.email,
                        onChange:handleChange
                    }}
                />
                <Input
                    label="Password"
                    error={errors.password}
                    input={{
                        id:"psw",
                        type:"password",
                        name:"password",
                        // placeholder:"",
                        value:values.password,
                        onChange:handleChange,
                        onKeyPress:handleKeyPress
                    }}
                />

                <div className={"loginBtn"} onClick={handleSubmit}>Log In</div>
                <div className="text-danger">
                    {errors.loginErrorMessage}
                </div>
                {isLoading && <p className={"paragraphLoading"}>Loading ...</p>}
        </div>
        </main>
    )
}


export default Login;