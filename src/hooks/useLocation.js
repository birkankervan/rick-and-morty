import useSWR from "swr";

const useLocation = ({ page = "", name = "" }) => {
  const url = `/location/?page=${page}&name=${name}`;
  const { data, error } = useSWR(url, {});
  return {
    location: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useLocation;
