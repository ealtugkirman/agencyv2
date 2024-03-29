/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const mousemove = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default mousemove;