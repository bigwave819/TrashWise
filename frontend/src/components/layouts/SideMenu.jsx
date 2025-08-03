import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import { toast } from "react-toastify"


const SideMenu = ({ activeMenu }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or whatever key you store the user in
    toast.success("Logout successful!");
    navigate("/login");
  };

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
    } else {
      navigate(route);
    }
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      {SIDE_MENU_DATA.map((item) => (
        <button
          key={item.id}
          className={`w-full flex items-center gap-4 text-[15px] 
            ${
              activeMenu === item.label
                ? "text-white bg-blue-800"
                : "text-gray-700 hover:bg-gray-100"
            } 
            py-3 px-6 rounded-lg mb-3 transition-colors cursor-pointer`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
