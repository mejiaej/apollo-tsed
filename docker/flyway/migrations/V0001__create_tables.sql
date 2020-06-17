
    CREATE TABLE IF NOT EXISTS blog.post (
      id SERIAL PRIMARY KEY,
      owner_name VARCHAR(100) NOT NULL,
      content TEXT NOT NULL);

    CREATE TABLE IF NOT EXISTS blog.comment (
      id SERIAL PRIMARY KEY,
      owner_name VARCHAR(100) NOT NULL,
      content TEXT NOT NULL,
      post_id INTEGER REFERENCES blog.post (id)
    );