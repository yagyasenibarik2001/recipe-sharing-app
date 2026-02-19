import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const navLink = (path) =>
        `relative px-3 py-2 transition ${location.pathname === path
            ? "text-green-600"
            : "text-gray-700 hover:text-green-600"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-green-600 tracking-tight">
                        Recipe<span className="text-gray-800">App</span>
                    </h1>

                    {/* Links */}
                    <div className="flex items-center gap-6 font-medium">

                        <Link to="/" className={navLink("/")}>
                            Home
                            {location.pathname === "/" && (
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 rounded-full" />
                            )}
                        </Link>

                        <Link to="/recipes" className={navLink("/recipes")}>
                            View Recipes
                            {location.pathname === "/recipes" && (
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 rounded-full" />
                            )}
                        </Link>

                        <Link
                            to="/upload"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
                        >
                            Upload Recipe
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
