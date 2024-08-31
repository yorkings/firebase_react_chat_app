import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, arrayUnion } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../lib/firebase.js";
import { useState } from "react";
import { useuserStore } from "../../../lib/userstore.js";
const Adduser = () => {
    const { currentUser } = useuserStore();
    const [user, setUser] = useState(null);
    const [load, setload] = useState(false);
    const handleSearch = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const username = formdata.get("username");
        try {
            const citiesRef = collection(db, "users");
            const q = query(citiesRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                setUser(querySnapshot.docs[0].data());
                setload(true);
            }
        }
        catch (err) {
            toast.error(err);
        }
    };
    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userchatRef = collection(db, "userchats");
        try {
            const newchatRef = doc(chatRef);
            await setDoc(newchatRef, {
                createdAt: serverTimestamp(),
                messages: []
            });
            await updateDoc(doc(userchatRef, user.id), {
                chats: arrayUnion({
                    chatId: newchatRef.id,
                    lastmessage: "",
                    recieverId: currentUser.id,
                    updatedAt: Date.now()
                })
            });
            await updateDoc(doc(userchatRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newchatRef.id,
                    lastmessage: "",
                    recieverId: user.id,
                    updatedAt: Date.now()
                })
            });
        }
        catch (err) {
        }
    };
    return (_jsxs("div", { className: "h-max w-max p-7 rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto bg-[rgba(21,23,27,0.9)]", children: [_jsxs("form", { className: "flex gap-5", onSubmit: (e) => handleSearch(e), children: [_jsx("input", { type: "text", name: 'username', placeholder: 'username', className: "p-5 border-none rounded-lg outline-none" }), _jsx("button", { className: "p-5 border-none rounded-lg bg-[#1a73e8] cursor-pointer", disabled: load, children: load ? "searching" : "search" })] }), user &&
                _jsxs("div", { className: "mt-12 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center justify-between gap-5", children: [_jsx("img", { src: user.avatar || "./avatar.png", alt: "", className: "h-12 w-12 rounded-full object-cover" }), _jsx("span", { children: user.username })] }), _jsx("button", { onClick: handleAdd, className: "p-5 border-none rounded-lg bg-[#1a73e8] cursor-pointer", children: "add user" })] })] }));
};
export default Adduser;
