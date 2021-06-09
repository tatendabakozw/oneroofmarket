import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import General from '../Layouts/General';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password2Visible, setPassword2Visible] = useState(false)
    // const history = useHistory()
    // const [msg, setMsg] = useState('')
    // const [err, setErr] = useState('')
    // const [loggedInUser, setLoggedInUser] = useState()
    // eslint-disable-next-line
    // const [{}, dispatch] = useStateValue()


    const registerUser = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(username)
        console.log(password)
        console.log(password2)
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
            <div className="mt-8">
                <form onSubmit={registerUser} className="login flex flex-col items-center">
                    <p className="text-gray-700 text-2xl mb-8 font-semibold">Register</p>
                    {/* {msg ? (<p className="bg-blue-200 text-gray-700 font-semibold text-center p-2 rounded">{msg}</p>) : null} */}
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-1">Email Address</label>
                        <input
                            type="text"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email" className="border-2 border-blue-light rounded p-2" />
                    </div>
                    {/* <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-1">Username</label>
                        <input
                            type="text"
                            id="email"
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Enter username" className="border-2 border-blue-light rounded p-2" />
                    </div> */}
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-1"> Password</label>
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
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-4">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-1">Confirm Password</label>
                        <div className="border-2 border-blue-light rounded w-full px-2 text-gray-500 flex flex-row items-center">
                            <input
                                type={password2Visible ? "text" : "password"}
                                id="email"
                                onChange={e => setPassword2(e.target.value)}
                                placeholder="Confirm password" className="outline-none rounded p-2 w-full" />
                            {password2Visible ? (<span onClick={() => setPassword2Visible(false)} className="cursor-pointer">
                                <VisibilityOffIcon />
                            </span>) : (<span onClick={() => setPassword2Visible(true)} className="cursor-pointer">
                                <VisibilityIcon />
                            </span>)}
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-light self-center font-semibold w-2/5 mt-8 hover:bg-blue-main justify-center rounded text-white p-2 flex flex-row items-center">Sign In</button>
                    <p className="text-gray-700 mt-2">Already registered? <Link to='/login'>Login here</Link></p>
                </form>
            </div>
        </General>
    );
}

export default Register
