import { BlogArticle } from "../../../components/BlogArticle";
import blogImage1 from "../../../assets/blogImage1.svg";
import blogImage2 from "../../../assets/blogImage2.svg";
import blogImage3 from "../../../assets/blogImage3.svg";
import blogImage4 from "../../../assets/blogImage4.svg";
import blogImage5 from "../../../assets/blogImage5.svg";
import blogImage6 from "../../../assets/blogImage6.svg";

export function Articles() {
    return (
        <div className="mx-40 mb-40 mt-10 flex flex-col">
            <div className="flex items-center gap-8">
                <h2 className="text-lg">Categories</h2>

                <div className="flex items-center gap-4 text-sm">
                    <p className="rounded-md bg-mutedBg px-3 py-2">All</p>
                    <p className="rounded-md bg-mutedBg px-3 py-2">Product</p>
                    <p className="rounded-md bg-mutedBg px-3 py-2">Technology</p>
                    <p className="rounded-md bg-mutedBg px-3 py-2">App</p>
                </div>
            </div>

            <div className="mt-[64px] flex gap-8">
                <BlogArticle
                    image={blogImage1}
                    title="How To Start Using Banquee For Your Startup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
                <BlogArticle
                    image={blogImage2}
                    title="10 Things Nobody Told You About Banquee"
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

            <div className="mt-[64px] flex gap-8">
                <BlogArticle
                    image={blogImage4}
                    title="Why We Love Banquee (And You Should, Too!)"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
                <BlogArticle
                    image={blogImage5}
                    title="5 Principles Of Crypto Investing"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
                <BlogArticle
                    image={blogImage6}
                    title="7 Things About Banquee Your Friends Want To Know"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
                    tags={["Product", "Technology"]}
                />
            </div>
        </div>
    );
}
