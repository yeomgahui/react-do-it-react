import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        console.log('1');
        super(props);
        //state 정의
        this.state = {  //컴포넌트에서 관리하려는 변수 state의 초깃값을 this.state에 객체 형태로 정의함
            loading: true,
            formData: 'no data',
        };

        this.handleData = this.handleData.bind(this); //함수로 넘어갈 this는 반드시 생성자에서 bind()함수로 묶어주어야한다. => 잘 이해안감
        //4초 후에 handleData 함수를 호출한다.
        setTimeout(this.handleData, 4000);
    }
    handleData() {
        console.log('2');

        const data = 'new data';
        const { formData } = this.state;    //컴포넌트 특수 변수 this.state를 사용하여 state값에 접근합니다. constructor에서 지정해준 state의 
        // formData의 값이 formData 값으로 들어감 
        // const formData = this.state; 이렇게 찍으면 new data[object Object]로 찍힘 
        console.log('formdata: ', formData);

        //state 변경
        this.setState({ //컴포넌트 내장 함수 this.setState()를 사용해 state값을 변경한다. 
            loading: false,
            formData: data + formData,
        });
        //this.state.loading의 값은 현재 true,
        console.log('loading값', this.state.loading);
        //이후 호출될 render() 함수에서의 this.state.loading은 false이다.
    }

    render() {
        console.log('3');

        return (
            <div>
                {/* state데이터는 this.state로 접근 가능함 */}
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과: {this.state.formData}</span>
            </div>
        );
    }
}

//순서를 console.log로 찍어보면 constructor-> render->handleData->render 순으로 찍히는데
//setState() 함수를 사용하면 리액트 엔진이 자동으로 render함수를 호출해줌

//state 사용시 주의 사항
//1. 생성자(constructor)에서 반드시 초기화 (내부함수에서 state 값에 접근할 수 없기때문, 만약 초기값이 없다면 state에 빈 객체라도 넣어줘야함
// ex, this.state = [];)
//2. state값을 변경할 때는 setState() 함수(상태관리 함수)를 반드시 사용해야함
//3. setState() 함수는 비동기로 처리됨, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거침 

// setState() 함수의 인자로 함수를 전달하면 이전 state값을 쉽게 읽을 수 있다. 


export default StateExample;