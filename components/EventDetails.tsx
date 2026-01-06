'use client';


import { useState } from "react";

import React from 'react'

const BookEvent = () => {
    const [email, setEmail] = useState(``);
    const [submitted, setSubmiited] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            setSubmiited(true);
        }, 1000)
    }
    return (
        <div id="book-event">
            {submitted ? (
                <p className="text-sm">Thank you for signing up</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button type="submit" className="button-submit">Submit</button>
                </form>
            )}
        </div>

    )
}

export default BookEvent