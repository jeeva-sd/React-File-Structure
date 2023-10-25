import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch(error, info) {
    //     Add logging logic here if needed.
    // }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 text-red-500">Oops! Something went wrong</h1>
                        <p className="text-lg text-gray-600">We apologize for the inconvenience.</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;