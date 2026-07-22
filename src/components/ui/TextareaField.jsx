import React from "react";

const TextareaField = ({
    label,
    id,
    name,
    value,
    onChange,
    error,
    disabled,
    placeholder,
    rows = 4
}) => {
    return (
        <div className="flex flex-col gap-1 w-full mb-4">
            <label 
                htmlFor={id} 
                className="text-sm font-medium text-typography-light dark:text-typography-dark-muted"
            >
                {label}
            </label>
            
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                rows={rows}
                aria-invalid={error ? "true" : "false"}
                className={`
                    w-full px-4 py-2 rounded-lg border bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                    text-typography-light dark:text-typography-dark
                    focus:outline-none focus:ring-2 transition-all duration-200 resize-y
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${error 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-accent-secondary dark:focus:ring-accent-primary'
                    }
                `}
            />
            
            {error && (
                <span className="text-xs text-red-500 font-medium mt-1">
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextareaField;        
