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
            <div className="bg-purple-900/70 flex justify-center items-center min-w-screen min-h-screen">
                <div className="bg-purple-300 rounded-full p-6 px-10 text-4xl text-bold border-2 border-gray-300">
                    <table>
                        <tr>
                            <td className="p-2">WIDTH</td>
                            <td className="p-2">{windowSize.width}px</td>
                        </tr>
                        <tr>
                            <td className="p-2">HEIGHT</td>
                            <td className="p-2">{windowSize.height}px</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}


// best practice to export a component is to use named export
export {
    WindowTape
}