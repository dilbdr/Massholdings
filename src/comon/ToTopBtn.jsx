import { useState, useEffect } from "react";

const ToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={show ? "top-btn btn-show" : "top-btn"}
            aria-label="Scroll to top"
        >
            <i className="fa-solid fa-arrow-up-long"></i>
        </button>
    );
};

export default ToTopBtn;
