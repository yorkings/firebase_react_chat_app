import { jsx as _jsx } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
const Notification = () => {
    return (_jsx("div", { children: _jsx(ToastContainer, { position: "bottom-right" }) }));
};
export default Notification;
