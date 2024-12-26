import { supabase } from '@/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage({
        type: 'error',
        content: 'Passwords do not match',
      });
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      setMessage({
        type: 'success',
        content: 'Password has been reset successfully!',
      });

      // Redirect to login page after successful reset
      setTimeout(() => {
        navigate('/'); // Update this to your login page route
      }, 2000);
    } catch (error) {
      setMessage({
        type: 'error',
        content: error.message || 'An error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[520px] p-8 rounded-lg border border-[#F2F2F2] shadow-[#00260314] bg-white font-poppins mx-auto my-6">
        <h2 className="text-black text-[30px] text-center text-bold mb-6">
          Set New Password
        </h2>
        <form onSubmit={handlePasswordReset}>
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md"
              placeholder="Enter new password"
              minLength={6}
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md"
              placeholder="Enter new password"
              minLength={6}
            ></input>
          </div>
          {message.content && (
            <div
              className={`p-3 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              {message.content}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00B207] text-white text-sm rounded-full font-semibold hover:bg-green-600 w-full p-3"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </>
  );
}
