import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import InfiniteScrollerCode from '!!raw-loader!./stories/InfiniteScrollerCode'; // eslint-disable-line
import InfiniteScrollerComponent from './stories/ExampleComponent';
import InfiniteScrollerDoc from './stories/DocComponent';

storiesOf('InfineteScroller', module)
    .add('InfineteScroller Simple',
        exampleStory({
            component: InfiniteScrollerDoc,
            example: InfiniteScrollerComponent,
            code: InfiniteScrollerCode,
            options: { showAddonPanel: true }
        })
    );
