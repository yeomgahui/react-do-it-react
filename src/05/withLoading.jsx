import React, { Component } from 'react';

export default function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading(props) {
        return (
            <WrappedComponent {...props} />
        );
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;

}

// export default function (loadingMessage = '로딩 중') {

//     return function withLoading(WrappedComponent) {
//         const { displayName, name: componentName } = WrappedComponent;
//         const WrappedComponentName = displayName || componentName;

//         function WithLoading({ isLoading, ...otherProps }) {
//             if (isLoading) return loadingMessage;
//             return (
//                 <WrappedComponent {...otherProps} />
//             );
//         };
//         WithLoading.displayName = `withLoading(${WrappedComponentName})`;
//         return WithLoading;

//     }
// }