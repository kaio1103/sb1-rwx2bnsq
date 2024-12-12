import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function InputField({ value, onChange, disabled, placeholder }: InputFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 px-4 py-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/80 bg-transparent text-white placeholder-gray-300"
      disabled={disabled}
    />
  );
}