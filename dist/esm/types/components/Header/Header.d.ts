import PropTypes from "prop-types";
import "./header.css";
declare function Header({ user, onLogin, onLogout, onCreateAccount }: {
    user: any;
    onLogin: any;
    onLogout: any;
    onCreateAccount: any;
}): import("react/jsx-runtime").JSX.Element;
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
export default Header;
