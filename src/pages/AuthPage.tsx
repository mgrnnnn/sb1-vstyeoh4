import React from 'react';
import { SignUpForm } from '../components/auth/SignUpForm';

export function AuthPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4">
      <SignUpForm />
    </div>
  );
}