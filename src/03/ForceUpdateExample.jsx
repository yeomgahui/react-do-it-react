import React, { Component } from 'react';

class ForceUpdateExample extends Component {
    constructor(props) {
        console.log('1');
        super(props);

        //state 정의
        this.loading = true; //클래스 내부 변수로 초깃값 설정
        this.formData = 'no data';

        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData, 4000);
    }

    handleData() {
        console.log('2-1');
        const data = 'new data';

        //state 변경
        this.loading = false; //내부 state 변경
        this.formData = data + this.formData;
        this.forceUpdate(); //컴포넌트 내장 함수 forceUpdate()를 호출해 강제로 화면 세로고침
        console.log('2-2')
    }
    render() {
        console.log('3');
        return (
            <div>
                <span>로딩중 : {String(this.loading)}</span>
                <span>결과 : {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;