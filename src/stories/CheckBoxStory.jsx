import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
    .addWithJSX('기본 설정', () => <CheckBox name="agree" />)
    .addWithJSX('children 예제', () => (
        <CheckBox name="agree">
            <Text>동의합니다.</Text>
        </CheckBox>
    ))
    .addWithJSX('label 예제', () => (
        <CheckBox name="agree" label="이름">
            <Text>i agree</Text>
        </CheckBox>
    ))
    .addWithJSX('onChange 예제', () => (
        <CheckBox name="agree" onChange={action('onChange 이벤트 발생')}>
            <Text>i agree</Text>
        </CheckBox>
    )).addWithJSX('checked 예제', () => (
        <CheckBox name="agree" label="이름" checked>
            <Text>i agree</Text>
        </CheckBox>
    )).addWithJSX('errorMessage 예제', () => (
        <CheckBox name="agree" label="이름" errorMessage="동의 필요합니다.">
            <Text>i agree</Text>
        </CheckBox>
    )).addWithJSX('autoFocus 예제', () => (
        <CheckBox name="agree" label="이름" autoFocus>
            <Text>i agree</Text>
        </CheckBox>
    ));