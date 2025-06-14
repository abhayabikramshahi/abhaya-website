import React, { useState } from 'react';

function getStrength(password) {
  let score = 0;
  if (!password) return { label: 'Empty', color: 'gray' };
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: 'Weak', color: 'red' };
  if (score === 3) return { label: 'Medium', color: 'orange' };
  if (score === 4) return { label: 'Strong', color: 'green' };
  if (score === 5) return { label: 'Very Strong', color: 'blue' };
  return { label: 'Weak', color: 'red' };
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const strength = getStrength(password);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Password Strength Checker</h1>

      <p className="max-w-3xl text-lg mb-10 text-center text-gray-600 dark:text-gray-300">
        This tool helps you create strong, secure passwords by giving instant feedback based on complexity.
        Protect your accounts by using passwords that include letters, numbers, and special characters.
      </p>

      <div className="w-full max-w-2xl">
        <label className="block text-xl font-medium mb-2">Enter Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="Type your password..."
        />

        <div className="mt-4 text-xl">
          <span className="font-semibold">Strength: </span>
          <span style={{ color: strength.color }}>{strength.label}</span>
        </div>

        <div className="mt-6 text-md text-gray-500 dark:text-gray-400">
          <ul className="list-disc pl-6">
            <li>Minimum 8 characters</li>
            <li>Includes uppercase and lowercase letters</li>
            <li>Includes numbers</li>
            <li>Includes special symbols (!@#$%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
