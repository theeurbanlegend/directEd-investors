import React from 'react';
import OptionsComponent from './options';
import LandingLayout from '../portfolio/layout';
 // Assuming correct path and filename

const Create: React.FC = () => {
  return (
    <LandingLayout>
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-lg" style={{ width: '75%' }}>
          <h1 className="text-2xl text-center font-bold mb-4">Choose an Option</h1>
          <OptionsComponent />
        </div>
      </div>
    </LandingLayout>
  );
};

export default Create;
