import React from 'react';
import { stoiesOf, storiesOf } from '@storybook/react';

import { PageWithLoadData } from '../05/lifecycle';

storiesOf('Lifecycle', module)
    .addWithJSX('loadData예제', () => (
        <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')} />
    ));