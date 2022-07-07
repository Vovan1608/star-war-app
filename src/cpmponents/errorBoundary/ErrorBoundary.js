import { useState } from 'react';
import ErrorIndicator from '../errorIndicator';

const ErrorBoundary = ({ children, error }) => {
    const [hasError, setHasError] = useState(error);

    if (hasError) {
        return <ErrorIndicator />;
    }

    return children;
}

export default ErrorBoundary;
