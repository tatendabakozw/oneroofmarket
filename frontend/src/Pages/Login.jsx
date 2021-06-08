import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { useStateValue } from '../StateContext/StateProvider';
// import axios from 'axios'
import General from '../Layouts/General';
// import { apiUrl } from '../API/apiUrl';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    // const history = useHistory()
    // const [msg, setMsg] = useState('')
    // const [err, setErr] = useState('')
    // const [loggedInUser, setLoggedInUser] = useState()
    // eslint-disable-next-line
    // const [{}, dispatch] = useStateValue()


    const loginUser = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        // axios.post(`${apiUrl}/auth/login`, {
        //     password: password,
        //     email: email,
        // })
        //     .then(function (response) {
        //         if (response.data.error) {
        //             setMsg(response.data.error)
        //         }
        //         else {
        //             setLoggedInUser(response.data.user)
        //             setMsg(response.data.message)
        //             setErr(response.data.error)
        //             localStorage.setItem('zomtoken', response.data.token)
        //             localStorage.setItem('zomuser', JSON.stringify(response.data.user))
        //             dispatch({
        //                 type: 'SET_USER',
        //                 user: loggedInUser
        //             })
        //             setTimeout(() => {
        //                 history.push('/')
        //             }, 2000);
        //         }
        //     })
        //     .catch(function (error) {
        //         setMsg('Account Does Not Exist')
        //         console.log(error)
        //     });
    }



    return (
        <General>
            <div className="mt-16">
                <form onSubmit={loginUser} className="login flex flex-col items-center">
                    <p className="text-gray-700 text-2xl mb-8 font-semibold">Sign In</p>
                    {/* {msg ? (<p className="bg-blue-200 text-gray-700 font-semibold text-center p-2 rounded">{msg}</p>) : null} */}
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-1">Email Address</label>
                        <input
                            type="text"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email" className="border-2 border-blue-light rounded p-2" />
                    </div>
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <span className="flex flex-row items-center justify-between">
                            <p className="text-gray-700 text-sm mb-1">Password</p>
                            <p className="text-blue-700 text-xs font-semibold mb-1">Forgot password?</p>
                        </span>
                        <div className="border-2 border-blue-light rounded w-full px-2 text-gray-500 flex flex-row items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="email"
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password" className="outline-none rounded p-2 w-full" />
                            {passwordVisible ? (<span onClick={() => setPasswordVisible(false)} className="cursor-pointer">
                                <VisibilityOffIcon />
                            </span>) : (<span onClick={() => setPasswordVisible(true)} className="cursor-pointer">
                                <VisibilityIcon />
                            </span>)}
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-light self-center font-semibold w-2/5 mt-8 hover:bg-blue-main justify-center rounded text-white p-2 flex flex-row items-center">Sign In</button>
                    <p className="text-gray-700 mt-2">Not yet registered? <Link to='/register'>Register here</Link></p>
                </form>
            </div>
        </General>
    );
}

export default Login