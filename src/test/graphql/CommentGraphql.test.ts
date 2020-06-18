import { PlatformTest } from '@tsed/common';
import * as SuperTest from 'supertest';
import { Server } from '../../Server';
import { Comment } from '../../graphql/schema/type/Comment';
import {
  COMMENTS_BY_POST_ID_QUERY,
  ADD_COMMENT_MUTATION,
  NEW_COMMENT,
} from '../fixtures/CommentFixture';
import { GRAPH_QL_ENDPOINT } from '../fixtures';

describe('Post Graphql', () => {
  // bootstrap your Server to load all endpoints before run your test
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeAll(PlatformTest.bootstrap(Server));
  beforeAll(() => {
    request = SuperTest(PlatformTest.callback());
  });
  afterAll(PlatformTest.reset);

  describe('comment', () => {
    it('executes query comments for postId 1', async () => {
      const response = await request
        .post(GRAPH_QL_ENDPOINT)
        .send({
          query: COMMENTS_BY_POST_ID_QUERY,
        })
        .expect(200);
      const comments = response.body.data.comments as Comment[];
      expect(comments.length).toBe(2);

      const firstComment = comments[0];
      expect(firstComment).toHaveProperty('id');
      expect(firstComment.id).toBeGreaterThan(0);

      expect(firstComment).toHaveProperty('ownerName');
      expect(firstComment.ownerName.length).toBeGreaterThan(0);
    });
  });

  describe('mutation addComment', () => {
    it('executes addComment mutation', async () => {
      // TODO: research about console.warn when performing mutation
      const response = await request
        .post(GRAPH_QL_ENDPOINT)
        .send({
          query: ADD_COMMENT_MUTATION,
        })
        .expect(200);

      const addComment = response.body.data.addComment as Comment;

      expect(addComment).toHaveProperty('id');
      expect(addComment.id).toBeGreaterThan(0);

      expect(addComment).toHaveProperty('content');
      expect(addComment.content).toBe(NEW_COMMENT.content);

      expect(addComment).toHaveProperty('ownerName');
      expect(addComment.ownerName).toBe(NEW_COMMENT.ownerName);
    });
  });
});
