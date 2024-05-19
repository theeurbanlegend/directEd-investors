import React from 'react';
import PoolForm from './PoolForm';

const CreatePoolPage: React.FC = () => {
  const handleFormSubmit = (formData: PoolFormData) => {
    console.log('Submitting pool data:', formData);
    // Add logic to send formData to backend API
  };

  return (
    <div>
      <PoolForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreatePoolPage;
