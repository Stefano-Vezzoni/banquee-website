export function Footer() {
    return (
        <div className="border-t px-36 pb-12">
            <div className="mt-24 flex justify-between border-b pb-20">
                <p className="-mt-1 text-3xl font-bold text-primary hover:text-teal-600">
                    banquee.
                </p>

                <div className="flex gap-10">
                    <div className="flex w-44 flex-col gap-4">
                        <h3 className="text-lg">About</h3>
                        <p className="mt-4 text-muted opacity-50">Features</p>
                        <p className="text-muted opacity-50">Pricing</p>
                        <p className="text-muted opacity-50">Support</p>
                    </div>

                    <div className="flex w-44 flex-col gap-4">
                        <h3 className="text-lg">Blog</h3>
                        <p className="mt-4 text-muted opacity-50">Products</p>
                        <p className="text-muted opacity-50">Technology</p>
                        <p className="text-muted opacity-50">Crypto</p>
                    </div>

                    <div className="flex w-44 flex-col gap-4">
                        <h3 className="text-lg">Webflow</h3>
                        <p className="mt-4 text-muted opacity-50">Styleguide</p>
                        <p className="text-muted opacity-50">Licensing</p>
                        <p className="text-muted opacity-50">Changelog</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg">Social Media</h3>
                        <p className="mt-4 text-muted opacity-50">Twitter</p>
                        <p className="text-muted opacity-50">Facebook</p>
                        <p className="text-muted opacity-50">Instagram</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between text-muted opacity-50">
                <p>
                    © Made by <span className="text-teal-600">Pawel Gola</span> - Powered by{" "}
                    <span className="text-teal-600">Webflow</span>
                </p>

                <span className="flex gap-8">
                    <p>Impressum</p>
                    <p>Datenschutz</p>
                </span>
            </div>
        </div>
    );
}
