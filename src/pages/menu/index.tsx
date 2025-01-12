import Authorization from "@/components/Layout/Authorixation";
import Navbar from "@/components/navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { AiFillLike } from "react-icons/ai";
import { Menu, MenuArr } from "./menu.interface";

export async function getServerSideProps() {
  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "";
  const res = await axios.get(`${apiUrl}/foods`, {
    headers: {
      "Content-Type": "application/json",
      apiKey: process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
  });
  return { props: { data: res.data.data || [] } };
}

const ListMenuPage = ({ data }: MenuArr) => {
  const router = useRouter();
  return (
    <Authorization>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-10 mt-32">
          {data.map((item: Menu) => {
            return (
              <div
                key={item.id}
                className="border-2 border-black rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => router.push(`/menu/${item.id}`)}
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-60 h-60 rounded-t-xl"
                />
                <div className="text-center bg-green-950 text-white py-2 rounded-b-xl">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p>Rating: {item.rating}</p>
                  <p className="flex items-center justify-center gap-2">
                    {item.totalLikes} <AiFillLike />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Authorization>
  );
};

export default ListMenuPage;
