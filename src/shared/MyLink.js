import React from "react";
import { Link } from "react-router-dom";

const MyLink = ({ children, ...props }) => {
    return (
        <Link {...props} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
        </Link>
    );
};

export default MyLink;
