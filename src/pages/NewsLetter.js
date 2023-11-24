import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../comon/loading";
import Errors from "../comon/error";
const API_URI = "https://admin.massholdings.com.np/api/footer";
const Newsletter = (props) => {
    const textMessage = document.querySelector('.text-white');
    const [msg, setMsg] = useState();
    const title = props.title
    const sumbitForm = (e) => {
        e.preventDefault();
        axios
            .post("https://admin.massholdings.com.np/api/newsletter", { email })
            .then(response => {
                setMsg(response.data.status_message);
                if (response.status == 200) {
                    textMessage.innerHTML = response.data.status_message

                }
            })

    }

    const [email, setEmail] = useState();
    useEffect(() => {
        setTimeout(function () {
            if (msg) {
                textMessage.innerHTML = ''
                setEmail('');
            }

        }, 1000);
    }, [msg]);
    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={sumbitForm}>
                <input
                    type="email"
                    placeholder="Enter Email Address" value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">Join</button>
                <br />
                <span className="text-white"></span>
            </form>
        </>
    );
};
export default Newsletter;