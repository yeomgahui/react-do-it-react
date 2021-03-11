//커링이란 함수를 반환하는 함수를 뜻함 
//사용하는 이유: 함수의 재활용 때문
function multiply(a, b) {
    return a * b;
}

function multiplyTwo(a) {
    return multiply(a, 2);
}

function multiplyX(x) {
    return function (a) {
        return multiply(a, x);
    }
}
//아래 코드는 multiplyX와 같다
const multiplyX2 = x => a => multiply(a, x);

const multiplyThree = multiplyX(3);

const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3); //3*3 =9
const result2 = multiplyFour(3); //4*3=12

//withStyles()함수를 사용할 때  withStyles()()와 같이 2개의 소괄호를 
//붙여 사용한 패턴과 동일함
//커링 함수의 특징은 '인자를 나눠 받아 실행 할 수 있다.
const result1_1 = multiplyX(3)(3); //9
const resuilt2_1 = multiplyX(4)(3); //12

//입력된 x에 a,b를 순서대로 곱한다음 c를 더하는 ((x*a)*b)+c 수학식
//a=2, b=3 c=4
const equation = (a, b, c) => x => ((x * a) * b) + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

//위와 같이 인자를 나중에 받아 실행할 함수를 생성해주는 
//equation()과 같은 함수를 커링 함수라고함

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3); //
const formula = x => addFour(multiplyThree(multiplyTwo(x)));
// => ((x+4)*3)*2
const formulaB = x => multiplyTwo(multiplyThree(addFour(x)));
//위와 같이 작성하면 코드 가독성이 떨어짐 ㅠㅠ 진짜 봐도 몰겠음

//커링이란 '함수의 인자를 다시 구성하여 필요한 함수를 만드는 패턴'


