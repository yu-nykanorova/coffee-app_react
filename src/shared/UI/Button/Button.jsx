import { Value } from "sass";

export const Button = ({className, variant, label, children, ...props}) => {

    const renderClass = () => {
        switch (variant) {
            case "primary":
                return `btn btn--primary ${className} `
                break;
            case "secondary":
                return `btn btn--secondary ${className} `
                break;
            default:
                break;
        }
    }
    return <button className={renderClass()} {...props}>{label || children}</button>
}
