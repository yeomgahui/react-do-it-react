import React from 'react';
//스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 임포트한다.
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

//Input 컴포넌트 인풋
import Input from '../03/Input';

//스토리북 도구에 표시할 스토리의 이름을 Input 으로 입력하고
//스토리북 도구에 표시할 메뉴 이름을 '기본 설정'으로 입력한다. 
storiesOf('Input', module)
    .addWithJSX('기본 설정', () => <Input name="name" />)
    .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
    .addWithJSX('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);