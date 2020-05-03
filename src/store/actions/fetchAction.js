export const fetchAction = (name, url) => (dispatch) => {
  return fetch(url)
    .then((res) => res.json().catch(() => ({})))
    .then((res) => {
      const data = res.data || [];

      if (data && data.length) {
        dispatch(add(data, name));
      } else {
        //dispatch(error("ERROR"));
        throw new Error("ERROR");
      }
    })
    .catch((e) => {
      // console.log(`ERROR: ${ e }`)
      throw new Error(e.message);
    });
};

export const fetchFilterAction = (name, url, value) => (dispatch) => {
  return fetch(url)
    .then((res) => res.json().catch(() => ({})))
    .then((res) => {
      const data = res.data || [];

      if (data && data.length) {
        const dataFiltered = data.filter((i) =>
          i.local.toLowerCase().includes(value.toLowerCase())
        );

        dispatch(add(dataFiltered, name));
      } else {
        //dispatch(error("ERROR"));
        throw new Error("ERROR");
      }
    })
    .catch((e) => {
      // console.log(`ERROR: ${ e }`)
      throw new Error(e.message);
    });
};

const add = (data, name) => ({
  type: "ADD",
  payload: { data, name },
});
