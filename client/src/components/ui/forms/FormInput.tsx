import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React, { ChangeEventHandler } from 'react';
import { StringMappingType } from 'typescript';

export default function FormInput({
    value,
    name,
    className,
    onChange,
    placeholder,
    type,
    title,
    rounded = true,
}: {
    value?: string;
    name?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: 'text' | 'password';
    title?: string;
    rounded?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {title && <label className="ps-1">{title}</label>}
            <input
                placeholder={placeholder}
                value={value}
                name={name}
                type={type}
                className={
                    ' w-full border-2 py-2 px-4 bg-transparent ' +
                    (rounded ? 'rounded-full ' : 'rounded-md ') +
                    className
                }
                onChange={onChange}
            />
        </div>
    );
}
