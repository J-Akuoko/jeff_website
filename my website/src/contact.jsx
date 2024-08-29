import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';


export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "5cccf13c-0548-46e3-838a-571e470d75ad");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Great!",
                text: "Your message has been sent successfully!",
                icon: "success"
            });
            event.target.reset()
        }
    };

    return (

        <div className="contact">
            <div><h1>Reach out!</h1></div>
            <div style={{ width: "50%", margin: "0 auto" }}><p>I am always open to keeping correspondence with researchers and the industry on topics relating to geochemistry, cosmochemistry,
                artificial intelligence and football. Just send over a quick message and I'd do well to keep in touch.</p></div>
            <form onSubmit={onSubmit} >
                <label>Name</label> <br />
                <input type="text" className="input_data" placeholder="Name" name="name" required /><br />

                <label>Email address</label><br />
                <input type="email" className="input_data" placeholder="Email address" name="email" required /> <br />

                <label>Message</label> <br />
                <textarea name="message" className="message_input" placeholder="Print your message" required></textarea> <br />

                <button type="submit" className='submit_message'>Submit</button>
            </form>

           
        </div>

    );
}