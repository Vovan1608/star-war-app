const WithChildFunction = (fn) => (Component) => {
    return (props) => {
        return (
            <Component {...props}>
                {fn}
            </Component>
        );
    };
};

export default WithChildFunction;
