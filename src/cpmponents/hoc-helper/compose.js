const compose = (...funcs) => (Component) => {
    return funcs.reduceRight((prevRes, func) => func(prevRes), Component);
};

export default compose;
