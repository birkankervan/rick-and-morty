import useSWR from "swr";

const useCharacter = ({ characters }) => {
  const { data, error } = useSWR(`/character/${characters}`);
  return {
    character: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useCharacter;
