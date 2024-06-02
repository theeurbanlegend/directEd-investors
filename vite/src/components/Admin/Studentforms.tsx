import React, { useState } from "react";
import LandingLayout from "../portfolio/layout";
import { Button } from "../../common/button";
import { useAddStudentMutation } from "../../hooks/useAddStudentMutation";
import { useGetPoolsQuery } from "../../hooks/useGetPoolsQuery";
import { toast } from "react-toastify";

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    education: "",
    careerGoals: "",
    experience: "",
    fundingNeed: "",
    imageFile: "",
    pool: "",
  });
  const addStudentMutation = useAddStudentMutation();
  const { pools } = useGetPoolsQuery();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toastId = React.useRef<any>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, imageUrl, imageFile: file });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toastId.current = toast.loading("Creating student profile...");
    try {
      const { imageFile, ...formDataWithoutImage } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append("file", imageFile);
      Object.entries(formDataWithoutImage).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await addStudentMutation.mutateAsync({
        studentInput: formDataToSend as any,
      });
      if (response.status === 201) {
        toast.dismiss(toastId.current);
        toast.success("Student profile created successfully!");
        setFormData({
          name: "",
          imageUrl: "",
          education: "",
          careerGoals: "",
          experience: "",
          fundingNeed: "",
          imageFile: "",
          pool: "",
        });
      } else {
        toast.dismiss(toastId.current);
        toast.error("Failed to create student profile!");}
    } catch (error) {
      console.error("Error creating student profile:", error);
      toast.dismiss(toastId.current);
      toast.error("Failed to create student profile!");}
  };

  return (
    <LandingLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4">
          <form
            onSubmit={handleSubmit}
            className="text-left text-black"
            encType="multipart/form-data"
          >
            <div className="relative">
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleImageChange}
              />
              <img
                className="w-20 h-20 rounded-full mx-auto border-2 border-blue-300 shadow-md mt-2 cursor-pointer"
                src={formData.imageUrl || "https://via.placeholder.com/150"}
                alt={formData.name || "Student Image"}
                onClick={() => {
                  const fileInput = document.getElementById("fileInput");
                  if (fileInput) {
                    fileInput.click();
                  }
                }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15 5a5 5 0 11-10 0 5 5 0 0110 0zm-1 0a4 4 0 11-8 0 4 4 0 018 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <input
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleInputChange}
            />
            <input
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="careerGoals"
              placeholder="Career Goals"
              value={formData.careerGoals}
              onChange={handleInputChange}
            />
            <input
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="experience"
              placeholder="Previous Experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
            <input
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="fundingNeed"
              placeholder="Funding Need"
              value={formData.fundingNeed}
              onChange={handleInputChange}
            />
            <select
              className="font-semibold text-sm w-full mb-2 px-3 py-2 border rounded"
              name="pool"
              value={formData.pool}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Pool
              </option>
              {pools?.map((pool: any) => (
                <option key={pool._id} value={pool._id}>
                  {pool.pool_name}
                </option>
              ))}
            </select>
            <Button type="submit">Create Profile</Button>
          </form>
        </div>
      </div>
    </LandingLayout>
  );
};

export default StudentProfileForm;
