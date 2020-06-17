import { PlatformTest } from '@tsed/common';
import * as SuperTest from 'supertest';
import { Server } from '../../Server';
import { Comment } from '../../graphql/schema/type/Comment';
import { AddCommentInput } from '../../graphql/schema/type/AddCommentInput';
import { removePropertyQuotes } from '../utilts';

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
        .post('/graphql')
        .send({
          query: `{
            comments (postId: 1) {
              id,
              content,
              ownerName
            }
          }`,
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
      const newComment: AddCommentInput = {
        ownerName: 'testOwner',
        content: 'test content',
        postId: 2,
      };

      // TODO: research about console.warn when performing mutation
      const response = await request
        .post('/graphql')
        .send({
          query: `mutation {
            addComment(newComment: ${removePropertyQuotes(
              JSON.stringify(newComment)
            )}) {
              id,
              content,
              ownerName
            }
          }`,
        })
        .expect(200);

      const addComment = response.body.data.addComment as Comment;

      expect(addComment).toHaveProperty('id');
      expect(addComment.id).toBeGreaterThan(0);

      expect(addComment).toHaveProperty('content');
      expect(addComment.content).toBe(newComment.content);

      expect(addComment).toHaveProperty('ownerName');
      expect(addComment.ownerName).toBe(newComment.ownerName);
    });
  });
});
