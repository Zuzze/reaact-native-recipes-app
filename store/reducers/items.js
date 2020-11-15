import { ITEMS } from "../../data/mock-data";
import { TOGGLE_FAVORITE } from "../actions/items";

const initialState = {
  items: ITEMS,
  filteredItems: ITEMS,
  favoriteItems: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteItems.findIndex(
        item => item.id === action.id
      );
      if (existingIndex >= 0) {
        // was already favorite, remove item from favorites
        const updatedFavorites = [...state.favoriteItems];
        updatedFavorites.splice(existingIndex, 1);
        return { ...state, favoriteItems: updatedFavorites };
      } else {
        // was not yet favorite, add favorite
        const itemToAdd = state.items.find(item => item.id === action.id);
        return {
          ...state,
          favoriteItems: state.favoriteItems.concat(itemToAdd)
        };
      }
    default:
      return state;
  }
};

export default itemsReducer;
