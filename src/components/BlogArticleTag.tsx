interface IBlogArticleTag {
    tagName: string;
}

export function BlogArticleTag({ tagName }: IBlogArticleTag) {
    return (
        <div className="flex items-center justify-center rounded-md bg-mutedBg px-3 py-2 text-sm">
            {tagName}
        </div>
    );
}
