import Authorization from "@/components/Layout/Authorixation";
import Navbar from "@/components/navbar";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { MenuDetail } from "./menu.interface";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "";
  const params = context.params ?? { id: "" };
  const res = await axios.get(`${apiUrl}/foods/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      apiKey: process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
  });
  return { props: { detail: res.data.data } };
}

const DetailMenuPage = ({ detail }: MenuDetail) => {
  return (
    <Authorization>
      <Navbar />
      <div className="mt-32 px-20 flex gap-10 justify-center">
        <div className="border-2 border-black rounded-3xl shadow-2xl">
          <img
            src={detail.imageUrl}
            alt=""
            className="w-auto h-96 rounded-t-3xl"
          />
          <div className="bg-green-950 text-white p-6 rounded-b-3xl">
            <p className="text-4xl font-bold mb-3">{detail.name}</p>
            <p className="text-xl break-words max-w-[250px] mb-5">Description: {detail.description}</p>
            <p className="text-xl">Rating: {detail.rating}</p>
            <p className="text-xl flex items-center gap-2 mb-5">
              {detail.totalLikes}
              <AiFillLike />
            </p>
            <p className="text-xl">
              Ingredients:
              <ul className="list-disc list-inside">
                {detail.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Authorization>
  );
};

export default DetailMenuPage;
