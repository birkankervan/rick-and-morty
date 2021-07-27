import useSWR from "swr";

const useLocation = () => {
  const { data, error } = useSWR("/location", {

  });
  return {
    location: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useLocation;
