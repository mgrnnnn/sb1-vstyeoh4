import React, { useState } from 'react';
import { Button } from '../Button';
import { supabase } from '../../lib/supabase';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: signUpError, data } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            nickname: formData.nickname
          }
        }
      });

      if (signUpError) throw signUpError;
      
      // Update profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ 
            nickname: formData.nickname
          })
          .eq('id', data.user.id);

        if (profileError) throw profileError;
      }

      alert('Check your email for the confirmation link');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#191308] mb-6">Create Account</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#201E1F] mb-1">
            Nickname
          </label>
          <input
            name="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-[#3B30A8] focus:border-[#3B30A8]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#201E1F] mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-[#3B30A8] focus:border-[#3B30A8]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#201E1F] mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-[#3B30A8] focus:border-[#3B30A8]"
            required
            minLength={6}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#201E1F] mb-1">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-[#3B30A8] focus:border-[#3B30A8]"
            required
            minLength={6}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  );
}