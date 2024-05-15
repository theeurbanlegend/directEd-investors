import React, { useState } from 'react';
import LandingLayout from '../portfolio/layout';
import { Button } from '../../common/button';

interface PoolFormProps {
    onSubmit: (formData: PoolFormData) => void;
}

interface PoolFormData {
    poolName: string;
    targetAmount: string;
    description: string;
}

const PoolForm: React.FC<PoolFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<PoolFormData>({
        poolName: '',
        targetAmount: '',
        description: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
        // Reset form after submission
        setFormData({ poolName: '', targetAmount: '', description: '' });
    };

    return (
        <LandingLayout>
            <div className="max-w-lg mx-auto p-4">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                    <div className="mb-4">
                        <label htmlFor="poolName" className="block text-sm font-semibold mb-1">
                            Pool Name
                        </label>
                        <input
                            type="text"
                            id="poolName"
                            name="poolName"
                            value={formData.poolName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Pool Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="targetAmount" className="block text-sm font-semibold mb-1">
                            Target Amount
                        </label>
                        <input
                            type="text"
                            id="targetAmount"
                            name="targetAmount"
                            value={formData.targetAmount}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Target Amount"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 h-32 resize-none"
                            placeholder="Enter Description"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                    >
                        Create Pool
                    </Button>
                </form>
            </div>
        </LandingLayout>

    );
};

export default PoolForm;
