import PostCard from './PostCard';

function PostList(){
    const posts =[
         {
            id: 1,
            title: "Getting started with react",
            excerpt: "Learn the basic of react and how to build components",
            author: "Alice",
            date: "Jan 15, 2026"
         },
      {
        id: 2,
        title: "JavaScript best practices",
        excerpt: "Write cleaner and more efficient JavaScript code",
        author: "Bob",
        date: "Jan 14, 2026"
      },
      {
        id: 3,
        title: "CSS tips and tricks",
        excerpt: "Make your website look amaizing with these CSS tips",
        author: "Charlie",
        date: "jan 13, 2026"
      }
         

    ];

    return (
        <div>
            {posts.map(post =>(
                <PostCard
                key ={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                />
            ))}
        </div>
    );
}
export default PostList