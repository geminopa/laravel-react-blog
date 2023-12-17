import Post from '@/Components/Post';

export default function CreatePostForm({ posts }) {

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                {posts.map(post =>
                    <Post key={post.id} post={post} />
                )}
            </div>
        </div>

    )

}