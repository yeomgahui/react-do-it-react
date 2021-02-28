import React, { Component } from 'react';

class MyComponent extends Component {

    constructor(props) {
        super(props);
        console.log('생성 함수');
    }

    componentDidMount() {
        //상속받은 생명주기 함수
    }
    myMethod(){
        //추가 확장 함수
    }

    render() {
        //상속받은 화면 출력 함수
        const name = this.props.name;
        return <span>{name}</span>;
    }
}

export default MyComponent;