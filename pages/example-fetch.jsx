import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage() {
  const [response, setResponse] = useState();

  const { data, error, isLoading } = useSWR(
    "https://api.genderize.io/?name=luc",
    (url) => fetch(url).then((res) => res.json())
  );
  if (error) {
    return <p>Failed to Load</p>;
  }
  if (!data) {
    return <p>Data is Loading....</p>;
  }
  console.log("data.....*****", data);

  //   const fetchFunction = async () => {
  //     const url = "https://api.genderize.io/?name=luc";
  //     const resp1 = await fetch(url);
  //     const resp2 = await resp1.json();
  //     setResponse(resp2);
  //   };
  //   useEffect(() => {
  //     fetchFunction();
  //   }, []);
  //   console.log("**********", response);

  return (
    <div>
      <h1>Last Sales Page</h1>
      <p>Count: {data?.count}</p>
      <p>Name: {data?.name}</p>
      <p>Gender: {data?.gender}</p>
    </div>
  );
}
