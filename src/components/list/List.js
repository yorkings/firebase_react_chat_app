import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Userinfo from "./userInfo/Userinfo";
import Chatlist from "./chatlist/Chatlist";
const List = () => {
    return (_jsxs("div", { className: "flexme", children: [_jsx(Userinfo, {}), _jsx(Chatlist, {})] }));
};
export default List;
