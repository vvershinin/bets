import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import CommentCountCode from '!!raw-loader!./stories/CommentCountCode'; // eslint-disable-line
import CommentCountComponent from './stories/ExampleComponent';
import CommentCount from './stories/DocComponent';

storiesOf('Comments count', module)
    .add('Comments count',
        exampleStory({
            component: CommentCount,
            example: CommentCountComponent,
            code: CommentCountCode,
            options: { showAddonPanel: true }
        })
    );
