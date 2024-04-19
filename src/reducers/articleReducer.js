const initialState = {
  articles: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return {
        ...state,
        articles: action.payload,
      };
    case 'TOGGLE_BOOKMARK':
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload
            ? {...article, bookmarked: !article.bookmarked}
            : article,
        ),
      };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload
            ? {...article, bookmarked: false}
            : article,
        ),
      };
    default:
      return state;
  }
};

export default articleReducer;
