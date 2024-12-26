import { supabase } from '@/supabase';
import { useState } from 'react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      setMessage('Check your email for password reset instructions');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-[400px]">
          <h2 className="text-xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md"
              required
            ></input>
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#00B207] text-white rounded-full px-4 py-2 hover::bg-green-600"
              >
                {isLoading ? 'sending...' : 'Send Reset link'}
              </button>
              <button
                type="button"
                onClick={onclose}
                className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
            {message && (
              <p
                className={`text-sm ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
