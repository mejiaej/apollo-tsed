export const POSTS_QUERY = `{
  posts {
    id,
    content,
    ownerName,
    comments {
      id,
      content
    }
  }
}`;
