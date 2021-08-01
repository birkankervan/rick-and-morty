import useSWR from "swr";

const useCharacter = ({ characters, filter, page = "", name = "" }) => {
  const url = characters
    ? `/character/${characters}`
    : `/character/?page=${page}&name=${name}`;

  const { data, error } = useSWR(url);

  let filtered;
  if (filter) {
    const { status, gender, name } = filter;

    const newStatus = status
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    const newGender = gender
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    filtered =
      data &&
      (Array.isArray(data) ? data : [data])?.filter(
        (character) =>
          character.name.toLowerCase().includes(name) ||
          character.species.toLowerCase().includes(name) ||
          character.type.toLowerCase().includes(name) ||
          newStatus.includes(character.status.toLowerCase()) ||
          newGender.includes(character.gender.toLowerCase())
      );
  }

  return {
    character: data,
    filtered: filtered?.length > 0 ? filtered : null,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useCharacter;
