import React from 'react';

const OptionsComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-10" style={{ width: '100%' }}>
      <div className="flex-grow">
        <a
          href="/poolForm"
          className="w-full bg-gray-200 rounded-full p-4 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer text-lg flex justify-center items-center focus:outline-none"
        >
          Create Pool
        </a>
      </div>
      <div className="flex-grow ml-2">
        <a
          href="/Studentform"
          className="w-full bg-gray-200 rounded-full p-4 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer text-lg flex justify-center items-center focus:outline-none"
        >
          Create Student Profile
        </a>
      </div>
    </div>
  );
};

export default OptionsComponent;
