import useSWR from "swr";

const useEpisode = ({ page = "", name = "", id }) => {
  const url = id ? `/episode/${id}` : `/episode/?page=${page}&name=${name}`;
  const { data, error } = useSWR(url);
  return {
    episode: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useEpisode;
