import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface textareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<textareaProps> = ({ name, label, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={ name }>{ label }</label>
            <textarea id={ name } { ...rest }></textarea>
        </div>
    );
}

export default Textarea;