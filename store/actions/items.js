export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

/**
 * Add or remove item with given id
 * @param {string} id
 */
export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    id
  };
};

/**
 * Filters items in the view to display only filtered data
 * @param {object} filters
 */
export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters
  };
};
