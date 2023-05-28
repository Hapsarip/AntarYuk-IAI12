import { useState } from "react";  

export default function input({ name, placeholder, values, setValues, value}) {
    const [pwdVisible, setPwdVisible] = useState(false);
    const [state, setState] = useState(value);

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        setState(e.target.value);
    };
    let type;
    switch (name) {
        case "email":
            type = "email";
            break;
        case "password":
            type = "password";
            break;
        default:
            type = "text";
    };
}