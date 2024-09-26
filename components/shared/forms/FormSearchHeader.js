import React, { useState } from 'react';
import Router from 'next/router';

const FormSearchHeader = () => {
    const [keyword, setKeyword] = useState(null);

    function handleSetKeyword(e) {
        e.preventDefault();
        if (e.target.value !== '') {
            setKeyword(e.target.value);
        } else {
            setKeyword(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (keyword !== '') {
            Router.push(`/search?keyword=${keyword}`);
        }
    }

    return (
        <form
            className="ps-form--header-search"
            onSubmit={(e) => handleSubmit(e)}
            method="post">
            <input
                className="form-control"
                type="text"
                placeholder="Search Searching..."
                onChange={(e) => handleSetKeyword(e)}
            />
            <button onClick={(e) => handleSubmit(e)}>
                <i className="icon-magnifier"></i>
            </button>
        </form>
    );
};

export default FormSearchHeader;
