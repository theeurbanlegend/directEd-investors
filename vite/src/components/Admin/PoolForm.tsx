import React, { useState } from "react";
import LandingLayout from "../portfolio/layout";
import { Button } from "../../common/button";
import { useAddPoolMutation } from "../../hooks/useAddPoolMutation";
import { toast } from "react-toastify";

interface PoolFormData {
  poolName: string;
  targetAmount: string;
  description: string;
}

const PoolForm: React.FC = () => {
  const [formData, setFormData] = useState<PoolFormData>({
    poolName: "",
    targetAmount: "",
    description: "",
  });
  const toastId = React.useRef<any>(null);
  const addPoolMutation = useAddPoolMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toastId.current = toast.loading("Creating pool...");
    try {
      // Reset form after submission
      await addPoolMutation.mutateAsync({
        pool_name: formData.poolName,
        pool_desc: formData.description,
        pool_extra_desc: "",
        pool_target_amnt: formData.targetAmount,
      });
      toast.dismiss(toastId.current);
      toast.success("Pool created successfully!");
      setFormData({ poolName: "", targetAmount: "", description: "" });
    } catch (error) {
      toast.dismiss(toastId.current);
      toast.error("An error occurred while creating pool!");
      console.error(error);
    }
  };

  return (
    <LandingLayout>
      <div className="max-w-lg mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="poolName"
              className="block text-sm font-semibold mb-1"
            >
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
            <label
              htmlFor="targetAmount"
              className="block text-sm font-semibold mb-1"
            >
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
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-1"
            >
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
          <Button type="submit">Create Pool</Button>
        </form>
      </div>
    </LandingLayout>
  );
};

export default PoolForm;
