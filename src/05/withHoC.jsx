import React, { Component } from 'react';


//WrappedComponent는 기존의 컴포넌트 또는 재활용할 컴포넌트임
export default function withHoC(WrappedComponent) {
    const { displayName, name } = WrappedComponent;
    const WrappedComponentName = displayName || name;

    return class WithHoC extends React.Component {
        static displayName = `withHoC(${WrappedComponentName})`;

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
};