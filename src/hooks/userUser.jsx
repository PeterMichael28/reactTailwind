import { useQuery } from "react-query";

const fetchData = async () => {
 return await fetch("http://localhost:4000/user").then(
  (res) => res.json()
 );
};

const useUser = () => {
 return useQuery(["user"], fetchData, {
     refetchOnMount: false,
     refetchOnWindowFocus: false,
     refetchIntervalInBackground: false,
 });
};

export default useUser;
