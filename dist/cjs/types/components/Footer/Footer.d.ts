import PropTypes from "prop-types";
import "./footer.css";
/**
 * Primary UI component for user interaction
 */
declare function Footer({ label }: {
    label: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Footer {
    var propTypes: {
        label: PropTypes.Validator<string>;
    };
    var defaultProps: {};
}
export default Footer;
