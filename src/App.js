import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/firebase";
import { useuserStore } from "./components/lib/userstore";
import { usechatStore } from "./components/lib/userchatStore";
function App() {
    const { currentUser, isLoading, fetchUserInfo } = useuserStore();
    const { chatId } = usechatStore();
    useEffect(() => {
        const checker = onAuthStateChanged(auth, (user) => {
            fetchUserInfo(user?.uid);
        });
        return () => {
            checker();
        };
    }, [fetchUserInfo]);
    console.log(currentUser);
    if (isLoading)
        return _jsxs("div", { className: "p-4 text-[1.2rem] bg-indigo-500 rounded-lg text-white flex items-center", children: [_jsxs("svg", { className: "animate-spin h-5 w-5 mr-3 text-white", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("circle", { className: "opacity-25", cx: "14", cy: "14", r: "12", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })] }), "loading..."] });
    return (_jsxs("div", { className: "container11 rounded-xl flex text-white bg-[rgba(17,25,40,0.75)] text-[0.875rem]", children: [currentUser ? (_jsxs(_Fragment, { children: [_jsx(List, {}), chatId && _jsx(Chat, {}), chatId && _jsx(Detail, {})] })) : (_jsx(Login, {})), _jsx(Notification, {})] }));
}
export default App;
