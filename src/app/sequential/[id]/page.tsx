import { getCommentsByPostId } from "@/utils/comments";
import { getPostById } from "@/utils/posts";
import Link from "next/link";

const Post: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  const postPromise = getPostById(id);
  const commentsPromise = getCommentsByPostId(id);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div>
      <h1>post information</h1>
      <Link href={"/sequential"}>Back to sequential posts</Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <h2>Comments</h2>
      <ul>
        {comments?.length > 0
          ? comments.map((comment: any) => <li>{comment.body}</li>)
          : "Comments not found"}
      </ul>
    </div>
  );
};

export default Post;
