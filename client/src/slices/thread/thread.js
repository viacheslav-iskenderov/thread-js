import {
  addComment,
  applyPost,
  createPost,
  likePost,
  loadMorePosts,
  loadPosts,
  toggleExpandedPost } from './actions';
import { actions } from './thread.slice';

const allActions = {
  ...actions,
  loadPosts,
  loadMorePosts,
  applyPost,
  createPost,
  toggleExpandedPost,
  likePost,
  addComment
};

export { allActions as actions };
export { reducer } from './thread.slice';
