import { removePropertyQuotes } from '../utilts';
import { AddCommentInput } from '../../graphql/schema/type/AddCommentInput';

export const COMMENTS_BY_POST_ID_QUERY = `{
  comments (postId: 1) {
    id,
    content,
    ownerName
  }
}`;

export const NEW_COMMENT: AddCommentInput = {
  ownerName: 'testOwner',
  content: 'test content',
  postId: 2,
};

export const ADD_COMMENT_MUTATION = `mutation {
  addComment(newComment: ${removePropertyQuotes(JSON.stringify(NEW_COMMENT))}) {
    id,
    content,
    ownerName
  }
}`;
