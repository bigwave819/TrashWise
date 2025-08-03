import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const Profile = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Toggles
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/api/v1/user/edit",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.info(response.data.message || "Password updated successfully");

      // Reset fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout activeMenu="Profile">
      <div className="overflow-y-auto py-5 px-4">
        {/* CARD TO SHOW THE CURRENT PROFILE */}
        <div className="card">
          <h1 className="flex text-center justify-center font-semibold text-2xl">
            Y O U R P R O F I L E
          </h1>
          <div className="flex flex-col">
            <h1 className="text-xl">
              Names: <span className="text-sm text-gray-600">Hirwa</span>
            </h1>
            <h1 className="text-xl">
              Email:{" "}
              <span className="text-sm text-gray-600">Hirwa@gmail.com</span>
            </h1>
          </div>
        </div>

        {/* Change Password */}
        <div className="mt-5 card">
          <h1 className="flex text-center justify-center font-semibold text-2xl">
            Change Password
          </h1>
          <form onSubmit={handleChangePassword}>
            {/* Current Password */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type={showCurrent ? "text" : "password"}
                name="existingPassword"
                id="existingPassword"
                className="block py-2.5 px-0 w-full pr-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <label
                htmlFor="existingPassword"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Current Password
              </label>
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
              >
                {showCurrent ? "Hide" : "Show"}
              </button>
            </div>

            {/* New Password */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type={showNew ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                className="block py-2.5 px-0 w-full pr-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label
                htmlFor="newPassword"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                New Password
              </label>
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
              >
                {showNew ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                className="block py-2.5 px-0 w-full pr-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label
                htmlFor="confirmPassword"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Changing..." : "Change Password"}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
