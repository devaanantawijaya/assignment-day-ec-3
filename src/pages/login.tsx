import Button from "@/components/button";
import Navbar from "@/components/navbar";
import axios, { AxiosError } from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "";
    try {
      const res = await axios.post(`${apiUrl}/login`, formData, {
        headers: {
          "Content-Type": "application/json",
          apiKey: process.env.NEXT_PUBLIC_API_KEY ?? "",
        },
      });
      setCookie("token", res.data.token);
      router.push("/menu");
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text:
          (error as AxiosError)?.response?.data?.message ||
          "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-52">
        <div className="bg-slate-100 p-10 w-96 rounded-2xl shadow-2xl">
          <h1 className="text-center text-4xl font-bold mb-5">Log In</h1>
          <div className="mb-3">
            <p className="text-xl font-semibold">Email</p>
            <input
              type="text"
              placeholder="example@email.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-2 w-full text-xl p-2 rounded-lg"
            />
          </div>
          <div className="mb-7">
            <p className="text-xl font-semibold">Password</p>
            <input
              type="text"
              placeholder="********"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="border-2 w-full text-xl p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <Button
              title="Login"
              onClick={handleLogin}
              bg="bg-green-950 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
