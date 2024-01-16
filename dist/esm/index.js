import { jsx } from 'react/jsx-runtime';

const Button = ({ variant, ...props }) => {
    const styles = () => {
        const propStyle = props.style ?? {};
        if (props.disabled)
            return propStyle;
        if (variant === "primary")
            return {
                borderColor: "#ef8200",
                backgroundColor: "#ef8200",
                color: "#FAFAFA",
                ...propStyle,
            };
        if (variant === "secondary")
            return {
                borderColor: "#ef8200",
                backgroundColor: "#FAFAFA",
                color: "#ef8200",
                ...propStyle,
            };
        return propStyle;
    };
    return (jsx("button", { className: "matt-button", ...props, style: styles(), children: props.children }));
};

const Input = () => {
    return jsx("div", { children: "Input" });
};

export { Button, Input };
//# sourceMappingURL=index.js.map
