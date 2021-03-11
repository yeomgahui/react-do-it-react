//이와 같이 되지 않을려면 커링함수를 순서대로 조합하는 compose()함수를 만들면 된다. 
//reduce()를 사용하면 함수를 조합해주는 함수를 만들 수 있다. 
//reduce() 함수는 배열을 객체로 만들어줌
//reduce()의 두번째 인자는 초깃값이고 첫번째 인자는 로직구현을 위한 함수를 적으면 됨
//prevFunc은 누적값, nextFunc은 누적할 값
const multiply = (a, b) => a * b;
const multiplyX = x => a => multiply(a, 2);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

const add = (a, b) => a + b;
const addX = x => a => add(x, a);
const addFour = addX(4);

[multiplyTwo, multiplyThree, addFour].reduce(function (prevFunc, nextFunc) {
    return function (value) {
        return nextFunc(prevFunc(value));
    };
}, function (k) {
    return k;
});
//1단계 : 초깃값과 multiplyTwo 함수의 조합
//prevFunc는 function(k){return k;}이고 nextFunc는 multiplyTwo
//첫 조합 연산은 아래와 같음

function a(value) {
    return multiplyTwo((k => k)(value));
}

//실무에서 사용하는 함수 조합 기법

//1. arguments를 사용하여 배열 인자 대신 나열형 인자로 함수 구조를 유연하게 만들기

function compose() {
    //Array의 prototype안에 정의된 slice함수를 사용해 나열형 자료를 배열로 변환함
    //자바스크립트의 트릭으로 실무에서는 arguments를 배열로 변환할 때 자주 사용하는 패턴
    //arguments는 자바스크립트의 특수변수로 함수 안에서 전달된 모든 인자 목록을 배열과 유사한 나열형 자료로 저장해둠
    const funcArr = Array.prototype.slice.call(arguments);

    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function (value) {
                return nextFunc(prevFunc(value));
            }
        },
        function (k) { return k; }
    );
}
const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);


//2. arguments를 활용하여 하나의 실행 인자 value를 다중인자로 사용가능하게 확장하기
//위 예제는 compose()함수가 받아들이는 함수 목록의 함수들은 모두 인자를 1개만 받는다.
//여러개 받게 하려면..?
//apply()함수는 인자에 전달된 배열을 전달받아 나열형 인자로 실행되도록 돕는다.
//첫번째 인자로 전달한 null은 함수에 포함된 this의 값을 정의한다.

function compose() {
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function () {
                const args = Array.prototype.slice.call(arguments);
                return nextFunc(prevFunc.apply(null, args));
            }
        },
        function (k) { return k; }
    );
}

//3. 젼개연산자로 더 간결하게 만들기
//전개 연산자를 사용하면 apply()함수와 arguments변수를 사용하지 않아도 됨

function compose(...funcArr) {
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function (...args) {
                return nextFunc(prevFunc(...args));
            }
        },
        function (k) { return k; }
    );
}
const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);
const x = 10;
formulaWithCompose(x);
