import './post.scss'

export const Post = ( { post } ) => {
  return (
    <div className='post'>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="title">
        {post.title}
      </div>
      <button className="read-more">
        Read More
      </button>
    </div>
  )
}