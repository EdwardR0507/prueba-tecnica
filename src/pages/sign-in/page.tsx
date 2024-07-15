import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/user/user.store";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const { toggleLogin, loggedIn } = useUserStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SignIn</h1>
      <Button onClick={toggleLogin} className="bg-blue-500 px-4 py-2" asChild>
        <Link to="/">{loggedIn ? "SignOut" : "SignIn"}</Link>
      </Button>
    </div>
  );
}
