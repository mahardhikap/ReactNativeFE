export const fetchArticles = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();

      dispatch({
        type: 'FETCH_ARTICLES',
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
};

export const toggleBookmark = id => {
  return {
    type: 'TOGGLE_BOOKMARK',
    payload: id,
  };
};

export const removeBookmark = id => {
  return {
    type: 'REMOVE_BOOKMARK',
    payload: id,
  };
};
