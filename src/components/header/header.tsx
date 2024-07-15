import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/user/user.store";
import { Button } from "../ui/button";

const Header = () => {
  const { loggedIn, toggleLogin } = useUserStore();

  const handleLogout = () => {
    toggleLogin();
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="mx-auto flex justify-between w-full px-4">
        <Link to="/" className="text-lg font-bold">
          Pokemon App
        </Link>
        <div>
          <span
            className={cn("mr-4", {
              "text-green-500": loggedIn,
              "text-red-500": !loggedIn,
            })}
          >
            {loggedIn ? "Logged In" : "Guest"}
          </span>
          {!loggedIn && (
            <Link to="/signin" className="ml-4">
              SignIn
            </Link>
          )}
          {loggedIn && (
            <Button
              className="ml-4"
              variant="destructive"
              onClick={handleLogout}
            >
              SignOut
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
