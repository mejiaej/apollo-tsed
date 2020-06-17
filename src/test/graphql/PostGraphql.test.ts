import { PlatformTest } from '@tsed/common';
import * as SuperTest from 'supertest';
import { Server } from '../../Server';
import { Post } from '../../graphql/schema/type/Post';

describe('Post Graphql', () => {
  // bootstrap your Server to load all endpoints before run your test
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeAll(PlatformTest.bootstrap(Server));
  beforeAll(() => {
    request = SuperTest(PlatformTest.callback());
  });
  afterAll(PlatformTest.reset);

  describe('Query posts', () => {
    it('should return posts', async () => {
      const response = await request
        .post('/graphql')
        .send({
          query: `{
        posts {
          id,
          content,
          ownerName,
          comments {
            id,
            content
          }
        }
      }`,
        })
        .expect(200);
      const posts = response.body.data.posts as Post[];
      expect(posts.length).toBeGreaterThan(0);
      expect(posts[0].id).not.toBeUndefined();
      expect(posts[0].content.length).toBeGreaterThan(0);
      expect(posts[0].ownerName.length).toBeGreaterThan(0);

      const { comments } = posts[1];
      expect(comments.length).toBeGreaterThan(0);
      
      expect(comments[0]).toHaveProperty('id');
      expect(comments[0].id).toBeGreaterThan(0);

      expect(comments[0]).toHaveProperty('content');
      expect(comments[0].content.length).toBeGreaterThan(0);
    });
  });
});
