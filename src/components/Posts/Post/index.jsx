import "./post.scss";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="post--img"
        src={`/assets/posts/${post.id}/capa.png`}
        alt={post.title}
      />
      <div className="post--title">{post.title}</div>
      <button className="post--read-more">Read More</button>
    </div>
  );
};
