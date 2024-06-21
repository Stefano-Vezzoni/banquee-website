import { BlogArticle } from "../../../components/BlogArticle";
import { TextIconInline } from "../../../components/TextIconInline";
import blogImage1 from "../../../assets/blogImage1.svg";
import blogImage2 from "../../../assets/blogImage2.svg";
import blogImage3 from "../../../assets/blogImage3.svg";

export function Blog() {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-[64px]">Blog</h2>
                <TextIconInline name="All Articles" />
            </div>

            <div className="mt-[64px] flex gap-8">
                <BlogArticle
                    image={blogImage1}
                    title="How To Start Using Banko For Your Startup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
                <BlogArticle
                    image={blogImage2}
                    title="10 Things Nobody Told You About Banko"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
                <BlogArticle
                    image={blogImage3}
                    title="7 Ways To Improve You Saving Habits"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
            </div>
        </div>
    );
}
