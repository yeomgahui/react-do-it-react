import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

const ButtonWithHoc = withHoC(Button);
const TextWithHoc = withHoC(Text);

storiesOf('WithHoC', module)
    .addWithJSX('기본 설정', () => (
        <div>
            <ButtonWithHoc>안녕하세요.</ButtonWithHoc>
            <TextWithHoc>안녕하세요.</TextWithHoc>
        </div>
    ))
    .addWithJSX('large 예제', () => (
        <div>
            <ButtonWithHoc large>안녕하세요.</ButtonWithHoc>
            <TextWithHoc large>안녕하세요</TextWithHoc>
        </div>
    ));

