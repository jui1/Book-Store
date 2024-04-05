import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Google from '../assets/gg.svg';

export const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigator = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Sign up Successfully");
            navigator(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password).then((userCredential)=>{
            const user = userCredential.user;
            alert("login Sucesfull")
            navigator(from, { replace: true });
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Signup Successfully");
            navigator(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all pointer-events-none">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all pointer-events-none">Password</label>
                                </div>
                                <p>If you have an account, please&nbsp;
                                    <Link to="/sign-up" className="text-blue-600">Sugn up</Link>
                                </p>
                                <div className="relative">
                                    <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">Sign up</button>
                                    <hr className="my-6 border-gray-300" />
                                    <div className='flex w-full items-center flex-col mt-5 gap-3 '>
                                        <button className='block' ><img src={Google} className='w-12 h-12 inline-block rounded' onClick={handleRegister} alt="Google Logo"></img>Login with Google</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
