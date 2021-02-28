import React, { Component } from 'react';
import shallowEqual from 'shallow-equal';

//pure Component 클래스는 Component 클래스를 상속받은 클래스임
class PureComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps)
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default PureComponent;