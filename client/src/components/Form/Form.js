import React from "react";

export function Input(props) {
    return (
        <input className="form-control" id="bookSearch" placeholder="Harry Potter" {...props} />
    )
}

export function Button(props) {
    return (
        <button type="button" className="btn btn-primary float-right" {...props}>Search</button>
    )
}