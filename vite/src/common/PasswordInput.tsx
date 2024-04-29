import React from 'react'
import { Input } from './input';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const PasswordInput = ({inputName,isPassVisible, setIsPassVisible, value,onChange, placeholder}) => {
  return (
    <div className="relative w-full border border-input rounded-md shadow-sm flex flex-row items-center">
    <Input
    name={inputName}
      placeholder={placeholder}
      type={`${isPassVisible ? "text" : "password"}`}
      value={value}
      onChange={onChange}
      className="w-full border-none shadow-none pr-8"
    />
    {isPassVisible ? (
      <EyeClosedIcon
        className="cursor-pointer absolute right-3"
        onClick={() => setIsPassVisible(false)}
      />
    ) : (
      <EyeOpenIcon
        className="cursor-pointer absolute right-3"
        onClick={() => setIsPassVisible(true)}
      />
    )}
  </div>
  )
}

export default PasswordInput