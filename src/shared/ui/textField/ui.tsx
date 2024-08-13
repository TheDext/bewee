import React, {FC} from "react";
import * as classes from "./styles.module.scss"

interface TextFieldProps {
    label?: string,
    placeholder: string,
    type: string,
    value: string,
    name: string,
    disabled?: boolean,
    error?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const TextField: FC<TextFieldProps> = ({label, placeholder, type, value, name, error, disabled, onChange}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <div className={classes.textField}>
            {
                label && <label htmlFor="" className="text-field__label">
                    {label}
                </label>
            }
            <input
                className="text-field__input"
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                disabled={disabled}
                placeholder={placeholder}
            />
            {error && <div className="text-field__error">{error}</div>}
        </div>
    );
};
