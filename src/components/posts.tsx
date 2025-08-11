import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDataPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      setPosts(data);
    };

    fetchDataPosts();
  }, []);

  return (
    <div>
      {posts && posts.length > 0
        ? posts.map((post: { id: string; title: string }) => <div key={post.id}>{post.title}</div>)
        : 'data loaded'}
    </div>
  );
}
