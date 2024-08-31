import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useuserStore } from "../../lib/userstore";
const Userinfo = () => {
    const { currentUser } = useuserStore();
    return (_jsxs("div", { className: "p-2 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: currentUser.avatar || "./avatar.png", alt: "", className: "h-12 w-12 rounded-full" }), _jsx("h2", { children: currentUser.username })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("img", { src: "./more.png", alt: "", className: "w-5 h-5 object-cover" }), _jsx("img", { src: "./video.png", alt: "", className: "w-5 h-5 object-cover" }), _jsx("img", { src: "./edit.png", alt: "", className: "w-5 h-5 object-cover" })] })] }));
};
export default Userinfo;
