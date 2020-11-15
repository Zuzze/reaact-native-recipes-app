import { ITEMS } from "../../data/mock-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/items";

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filtered = state.items.filter(item => {
        if (appliedFilters.glutenFree && !item.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !item.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !item.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !item.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredItems: filtered
      };
    default:
      return state;
  }
};

export default itemsReducer;
