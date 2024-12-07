import { supabase } from './../../supabase';
import { useState } from 'react';

export function CreateForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleCreateAccount = async () => {
    setErrorMessage('');
    console.log('email', email);
    console.log('password', password);
    if (password !== conirmPassword) {
      setErrorMessage("Password doesn't match Try again");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined, // Disable email redirect
          data: {
            email_confirmed_at: new Date().toISOString(), // Add confirmed timestamp
          },
        },
      });

      if (error) throw error;
      console.log('done');
      // setMessage('Check your email for the confirmation link!')
    } catch (error) {
      console.log('Error', error);
    }
  };
  return (
    <div>
      <div className="w-[520px] p-8 rounded-lg flex flex-col items-center border border-[#F2F2F2] shadow-[#00260314] bg-white font-poppins justify-around mx-auto my-6">
        <h1 className="text-[#1A1A1A] text-[30px] text-center text-bold">
          Create Account
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
          <div className="relative">
            <input
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 pr-10 rounded-md"
              placeholder="Confirm Password"
              type="password"
              value={conirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
              <span className="text-sm text-gray-600">
                Accept all terms & conditions
              </span>
            </label>
          </div>
          <button
            className="bg-[#00B207] text-white text-sm rounded-full font-semibold hover:bg-green-600 w-full p-3"
            onClick={handleCreateAccount}
            type="button"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Already have account?{' '}
          <a href="#" className="text-black font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
      {errorMessage && <p className="text-red-500">Error {errorMessage}</p>}
    </div>
  );
}
