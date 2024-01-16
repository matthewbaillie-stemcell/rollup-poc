import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import PropTypes from 'prop-types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;

declare const Input: () => react_jsx_runtime.JSX.Element;

declare function Header({ user, onLogin, onLogout, onCreateAccount }: {
    user: any;
    onLogin: any;
    onLogout: any;
    onCreateAccount: any;
}): react_jsx_runtime.JSX.Element;
declare namespace Header {
    var propTypes: {
        user: PropTypes.Requireable<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
        }>>;
        onLogin: PropTypes.Validator<(...args: any[]) => any>;
        onLogout: PropTypes.Validator<(...args: any[]) => any>;
        onCreateAccount: PropTypes.Validator<(...args: any[]) => any>;
    };
    var defaultProps: {
        user: null;
    };
}

/**
 * Primary UI component for user interaction
 */
declare function Footer({ label }: {
    label: any;
}): react_jsx_runtime.JSX.Element;
declare namespace Footer {
    var propTypes: {
        label: PropTypes.Validator<string>;
    };
    var defaultProps: {};
}

export { Button, Footer, Header, Input };
