import axios from "axios";
import { SWRConfig } from "swr";
import { BrowserRouter as Router } from "react-router-dom";
import Component from "./components/Layout";

const URL = "https://rickandmortyapi.com/api";

function App() {
  return (
    <Router>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher: async (path) => {
            try {
              const res = await axios.get(URL + path);
              return res.data;
            } catch (err) {
              console.log({ err });
            }
          },
        }}
      >
        <Component />
      </SWRConfig>
    </Router>
  );
}

export default App;
