import Papa from "papaparse"

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdHCSQHEuGihXCP4X2KGFPElABVmTfusWLq1dA8MWW9Vle0WtrykQa0kMrE9yszN15eJGKOjuI2JXn/pub?gid=0&single=true&output=csv"
      );
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: resolve, error: reject });
      });

      return parsed.data;
    },
  },
};


export default api