import { ITEMS } from "../../data/mock-data";

const initialState = {
  items: ITEMS,
  filteredItems: ITEMS,
  favoriteItems: []
};

const itemsReducer = (state = initialState, action) => {
  return state;
};

export default itemsReducer;
