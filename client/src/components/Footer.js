import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Recipe<span className="text-green-500">App</span>
                        </h2>
                        <p className="text-sm text-gray-400">
                            Discover, share, and explore delicious recipes from food lovers around the world.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/" className="hover:text-green-400 transition">
                                Home
                            </Link>
                            <Link to="/recipes" className="hover:text-green-400 transition">
                                View Recipes
                            </Link>
                            <Link to="/upload" className="hover:text-green-400 transition">
                                Upload Recipe
                            </Link>
                        </div>
                    </div>

                    {/* Extra / Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">
                            About
                        </h3>
                        <p className="text-sm text-gray-400">
                            Built using React & Tailwind CSS. A simple recipe-sharing platform project.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
                    <p>© 2026 RecipeApp. All rights reserved.</p>
                    <p className="text-green-500">Made with ❤ using React</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
