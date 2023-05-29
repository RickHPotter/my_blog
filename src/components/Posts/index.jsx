import { Post } from './Post'

import './posts.scss'
import posts from './posts.json'

export const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post}/>
      })}
    </div>
  )
}