import React, { Component } from 'react';

class LifecycleExample extends Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출');
        return {};
    }
    constructor(props) {
        super(props);

        //getDerivedStateFromProps() 함수를 사용하므로
        //경고 메시지를 건너 뛰기 위해 state초기값을 설정한다.
        this.state = {};
        console.log('constructor 호출시');
    }
    componentDidMount() {
        console.log('componentDidMount 호출');
        // this.setState({
        //     updated: true
        // });
    }
    componentDidUpdate() {
        console.log('componentDidUpdate 호출');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 호출');
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate 호출');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate 호출');
        //아래를 false를 선언하면 리액트 엔진은 데이터 비교 후 변경 사항이 없다라고 판단하여 이후 변경 과정의 생명주기 함수가 실행 안됨
        return false;
    }
    render() {
        console.log('render 호출');
        return null;
    }
}

export default LifecycleExample;