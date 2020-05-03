const fetch = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const index = state.findIndex((i) => i.name === action.payload.name);
      const dataModel = {
        id: action.payload.id,
        name: action.payload.name,
        data: action.payload.data,
      };

      if (index >= 0) {
        state.splice(index, 1, dataModel);
        return [...state];
      }

      return [...state, dataModel];

    default:
      return state;
  }
};

export default fetch;
