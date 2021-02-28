import React, { Component } from 'react';

class ListExample extends Component {
    render() {
        const priceList = [1000, 2000, 3000, 4000];
        const prices = priceList.map((price) => (<div>가격: {price}원</div>));

        const todoList = [
            { taskName: '빨래하기', finished: false },
            { taskName: '공부하기', finished: true },
        ];
        /**
         * 배열 컴포넌트의 경우 
         * 배열 요소의 개수만큼 반복하므로 성능에 영향을 많이 준다.
         * 배열 컴포넌트에는 키값을 key로 꼭 정의해 주어야 한다. 
         * 키값을 정의하여 출력한 배열 컴포넌트는 다시 출력해야 하는 경우 리액트 엔진이 
         * 기존의 컴포넌트를 재활용하여 성능을 높일수 있기 때문
         */

        return (
            <div>
                <larbel>가격 목록</larbel>
                {prices}
                <div>
                    {todoList.map(todo => <div>{todo.taskName}</div>)}
                </div>
                {/* 아래와 같이 key로 정해줘야 성능을 높일 수 있다. */}
                <div>{todoList.map((todo, i) => <div key={`tl_${i}`}>{todo.taskName}</div>)}</div>
            </div>
        );
    }
}

export default ListExample;