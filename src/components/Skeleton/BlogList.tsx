


//components/BlogList.tsx
'use client';

type Post = {
  id: number;
  title: string;
  excerpt: string;
};

// Helper to wrap a Promise and suspend while loading
function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let error: unknown;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      error = err;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender; // Suspend here
      if (status === 'error') throw error;      // Throw error if any
      return result;                             // Return data if ready
    },
  };
}

// Simulate fetching posts with delay
function fetchPosts() {
  return new Promise<Post[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Understanding React Suspense', excerpt: 'Learn how Suspense works in React and how it can improve your app’s performance.' },
        { id: 2, title: 'Next.js 13 Features', excerpt: 'Explore the latest features in Next.js 13 that make development easier and faster.' },
        { id: 3, title: 'SWR for Data Fetching', excerpt: 'How to use SWR for efficient data fetching with caching and revalidation.' },
      ]);
    }, 1500);
  });
}

// Create the resource outside the component so it's shared and cached
const postsResource = wrapPromise(fetchPosts());

export default function BlogList() {
  // This will either return data or suspend rendering
  const posts = postsResource.read();

  return (
    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '180px',
          }}
        >
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#333' }}>{post.title}</h2>
          <p style={{ margin: 0, color: '#666', flexGrow: 1 }}>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
