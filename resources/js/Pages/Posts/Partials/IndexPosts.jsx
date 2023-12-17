import Post from '@/Components/Post';

export default function IndexPosts({ posts }) {

    return (
        <>
            {posts.map(post =>
                <Post key={post.id} post={post} />
            )}
        </>
    )
}