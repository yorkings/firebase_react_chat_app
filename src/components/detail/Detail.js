import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Detail.css";
import { auth } from "../lib/firebase";
const Detail = () => {
    return (_jsxs("div", { className: "flexme overflow-scroll custom-scrollbar1", children: [_jsxs("div", { className: "py-2 px-2 relative flex flex-col items-center gap-3 border-b-2 border-b-[#dddddd34]", children: [_jsx("img", { src: "./avatar.png", alt: "", className: "h-[5.3rem] w-[5.3rem] rounded-full object-cover" }), _jsx("h2", { children: "Jane Doe" }), _jsx("p", { className: "flex items-center justify-center", children: "Lorem ipsum dolor sit amet, consectetur" })] }), _jsxs("div", { className: "p-5 flex flex-col gap-7 overflow-x-scroll custom-scrollbar1", children: [_jsx("div", { className: "option", children: _jsxs("div", { className: "title", children: [_jsx("span", { children: " Chat settings" }), _jsx("img", { src: "./arrowUp.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }) }), _jsx("div", { className: "option", children: _jsxs("div", { className: "title", children: [_jsx("span", { children: " Privacy & help" }), _jsx("img", { src: "./arrowUp.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }) }), _jsxs("div", { className: "option flex flex-col overflow-scroll custom-scrollbar1", children: [_jsxs("div", { className: "title", children: [_jsx("span", { children: "Shared Photos" }), _jsx("img", { src: "./arrowDown.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4 ", children: [_jsx("img", { src: "https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg", alt: "", className: "h-10 w-10 rounded-md object-cover" }), _jsx("span", { className: "text-[0.875rem] text-gray-200 font-light", children: "2024_3_21" })] }), _jsx("img", { src: "./download.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4 ", children: [_jsx("img", { src: "https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg", alt: "", className: "h-10 w-10 rounded-md object-cover" }), _jsx("span", { className: "text-[0.875rem] text-gray-200 font-light", children: "2024_3_21" })] }), _jsx("img", { src: "./download.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4 ", children: [_jsx("img", { src: "https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg", alt: "", className: "h-10 w-10 rounded-md object-cover" }), _jsx("span", { className: "text-[0.875rem] text-gray-200 font-light", children: "2024_3_21" })] }), _jsx("img", { src: "./download.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] })] })] }), _jsx("div", { className: "option", children: _jsxs("div", { className: "title", children: [_jsx("span", { children: " shared files" }), _jsx("img", { src: "./arrowUp.png", alt: "", className: "h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" })] }) }), _jsx("button", { className: "text-white bg-red-800 rounded-lg py-2 px-5 border-none cursor-pointer", children: "block user" }), _jsx("button", { className: "text-white  bg-sky-600  rounded-lg p-2  px-5 border-none cursor-pointer ", onClick: () => auth.signOut(), children: "logout" })] })] }));
};
export default Detail;