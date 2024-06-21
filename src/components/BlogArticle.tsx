import { BlogArticleTag } from "./BlogArticleTag";

interface IBlogArticle {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

export function BlogArticle({ image, title, description, tags }: IBlogArticle) {
    return (
        <div className="max-w-96">
            <img src={image} />
            <h3 className="mt-6 text-[28px] leading-tight">{title}</h3>

            <p className="mt-2">{description}</p>

            <span className="mt-6 flex gap-2">
                {tags.map((tag) => {
                    return <BlogArticleTag tagName={tag} />;
                })}
            </span>
        </div>
    );
}
