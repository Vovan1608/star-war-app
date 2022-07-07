import ErrorIndicator from '../errorIndicator';

const ErrorBoundary = ({ children, error }) => {
    if (error) {
        return <ErrorIndicator />;
    }

    return children;
}

export default ErrorBoundary;
