import React, { Component } from 'react';

export default function (loadingMessage = '로딩 중') {

    return function withLoading(WrappedComponent) {
        const { displayName, name: componentName } = WrappedComponent;
        const WrappedComponentName = displayName || componentName;

        function WithLoading({ isLoading, ...otherProps }) {
            if (isLoading) return loadingMessage;
            return (
                <WrappedComponent {...otherProps} />
            );
        };
        WithLoading.displayName = `withLoading(${WrappedComponentName})`;
        return WithLoading;

    }
}