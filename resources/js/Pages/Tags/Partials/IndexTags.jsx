import Tag from '@/Components/Tag';

export default function IndexTags({ tags }) {

    return (
        <>
            {tags.map(tag =>
                <Tag key={tag.id} tag={tag} />
            )}
        </>
    )
}