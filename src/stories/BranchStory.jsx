import React from 'react';
import { storiesOf } from '@storybook/react';

import BranchLoadingButton from '../05/branch';

storiesOf('Branch', module)
    .addWithJSX('default', () => <BranchLoadingButton>안녕하세요.</BranchLoadingButton>)
    .addWithJSX('isLoading', () => (
        <BranchLoadingButton isLoading> 안녕하세요.</BranchLoadingButton>
    ));