import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { PostsInitialState } from './PostsInterfaces';

const INITIAL_STATE: PostsInitialState = {
  postsListToShow: [],
  comments: [],
  errorMessage: null,
  isLoading: true,
  isCommenting: false,
  targetPost: {},
};

const postsReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): PostsInitialState => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_START:
    case postsActionsTypes.GET_TARGET_POST_START:
    case postsActionsTypes.CREATE_POST_START:
    case postsActionsTypes.GET_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postsListToShow: action.payload,
        comments: action.payload[0].comments,
        isLoading: false,
      };
    case postsActionsTypes.GET_TARGET_POST_SUCCESS:
      return {
        ...state,
        targetPost: action.payload[0],
        comments: action.payload[0].comments,
        isLoading: false,
      };

    case postsActionsTypes.CLEAR_TARGET_POST:
      return {
        ...state,
        targetPost: {},
      };

    case postsActionsTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        postsListToShow: [action.payload, ...state.postsListToShow],
        isLoading: false,
      };

    case postsActionsTypes.DELETE_COMMENT_START:
    case postsActionsTypes.CREATE_COMMENT_START:
      return {
        ...state,
        isCommenting: true,
      };

    case postsActionsTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isCommenting: false,
      };

    case postsActionsTypes.CHANGE_COMMENT_START:
      return {
        ...state,
        isCommenting: true,
      };

    case postsActionsTypes.CHANGE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isCommenting: false,
      };

    case postsActionsTypes.DELETE_COMMENT_SUCCESS:
    case postsActionsTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isCommenting: false,
      };

    case postsActionsTypes.GET_POSTS_FAILURE:
    case postsActionsTypes.GET_COMMENTS_FAILURE:
    case postsActionsTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;
