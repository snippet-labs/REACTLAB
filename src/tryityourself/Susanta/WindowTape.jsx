import {
    useEffect,
    useState
 } from "react";


function WindowTape() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Welcome to WindowTape</h1>
                <p className="mt-4">This is a simple app, which shows the window width and height, while resizing the window...</p>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <div className="bg-gray-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold">Window Size</h2>
                    <p className="mt-2">Width: {windowSize.width}px</p>
                    <p className="mt-2">Height: {windowSize.height}px</p>
                </div>
            </div>
        </>
    )
}


// best practice to export a component is to use named export
export {
    WindowTape
}