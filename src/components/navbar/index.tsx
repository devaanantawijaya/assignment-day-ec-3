import Link from "next/link";
import Button from "../button";
import { FaBowlFood } from "react-icons/fa6";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("token");
    setToken(token as string | null);
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    deleteCookie("token");
    setToken(null);
    router.push("/login");
  };

  return (
    <nav className="fixed flex justify-center mt-5 top-0 z-50 w-full">
      <div className="flex flex-row gap-5 bg-slate-100 p-5 font-semibold rounded-xl shadow-2xl text-green-950 items-center">
        <div>
          <Link href="/">
            <FaBowlFood className="text-4xl mr-10" />
          </Link>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/menu">Menu</Link>
        </div>
        <div className="ml-10">
          {token ? (
            <Button title="Logout" onClick={handleLogout} bg="bg-green-950 text-white"/>
          ) : (
            <Button title="Login" onClick={handleLogin} bg="bg-green-950 text-white"/>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
