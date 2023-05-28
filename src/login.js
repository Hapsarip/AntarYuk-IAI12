import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Input from "./input";
import { useAppContext } from "./appContext";

const initialState = {
    name: "",
    email: "",
    password: "",
};

const login = () => {
    const [values, setValues] = useState(initialState);
    let navigate = useNavigate();
    const { loginUser, user } = useAppContext();
    const onSubmit = (e) => {
        console.log("berhasil submit");
        e.preventDefault();
        const { email, password } = values;
        console.log(values);
        if(!email || !password ) {
            console.log("Belum diisi semua");
            return;
        }
        const currentUser = { email, password };
        loginUser(currentUser);
    }

    useEffect(() => {
        if(user) {
            setTimeout(() => {
               navigate(`/`); 
            }, 3000);
        }
    }, [user]);
}