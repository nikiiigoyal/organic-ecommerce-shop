import { supabase } from '@/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignIn = async (e) => {
    console.log('email', email);
    console.log('password', password);
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      console.log('sign in done');

      // Redirect or handle successful sign in
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const handleRegisterClick = () => {
    navigate('/CreateForm');
  };
  return (
    <div>
      <div className="w-[520px] p-8 rounded-lg flex flex-col items-center border border-[#F2F2F2] shadow-[#00260314] bg-white font-poppins justify-around mx-auto my-6">
        <h1 className="text-black text-[30px] text-center text-bold">
          Sign in
        </h1>
        <form className="w-full space-y-4">
          <div>
            <input
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // console.log(e.target.value)
              }}
            />
          </div>
          <div className="relative">
            <input
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 pr-10 rounded-md"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // console.log(e.target.value)
              }}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              👁️
            </span>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input className="w-5 h-5 mr-2" type="checkbox" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-gray-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            className="bg-[#00B207] text-white text-sm rounded-full font-semibold hover:bg-green-600 w-full p-3"
            onClick={handleSignIn}
            type="button"
          >
            Login
          </button>
          {errorMessage && <p className="text-red-500">Error {errorMessage}</p>}
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don&apos;t have account?{' '}
          <button
            type="button"
            onClick={handleRegisterClick}
            className="text-black font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
