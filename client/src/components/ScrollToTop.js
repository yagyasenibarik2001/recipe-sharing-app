import { useEffect, useState } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 
                bg-green-600 hover:bg-green-700 
                text-white w-10 h-10 
                rounded-xl shadow-lg 
                flex items-center justify-center
                transition-all duration-300 z-50
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
                `}                
        >
            <span className="text-lg">↑</span>

        </button>
    );
}

export default ScrollToTop;