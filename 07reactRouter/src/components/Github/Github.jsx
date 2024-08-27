import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState("");

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/aashusoni22")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex items-center justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="Git Profile" width={200} />
      Github followers: {data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aashusoni22");
  return response.json();
};
