interface IBlogArticleTag {
    tagName: string;
}

export function BlogArticleTag({ tagName }: IBlogArticleTag) {
    return (
        <div className="bg-bgMuted flex items-center justify-center rounded-md p-3 text-[13px]">
            {tagName}
        </div>
    );
}
