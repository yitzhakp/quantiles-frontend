import React, { useState } from "react";

const Option = (props) => {
    const { name, checked, handleCheckboxChange } = props;
    return (
        <>
            <label className="my-1 flex items-center justify-center">
                <input className="w-5 h-5"
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <p className="ml-1 text-2xl capitalize">{name}</p>
            </label>
        </>
    )
};

export default Option;