import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import BadgeSimpleCode from '!!raw-loader!./stories/BadgeSimpleCode'; // eslint-disable-line
import BadgeWithTetxtCode from '!!raw-loader!./stories/BadgeWithTextCode'; // eslint-disable-line
import { BadgeSimpleExam, BadgeWithTextExam } from './stories/ExampleComponent';
import Badge from './stories/DocComponent';

storiesOf('Badge', module)
    .add('Badge simple',
        exampleStory({
            component: Badge,
            example: BadgeSimpleExam,
            code: BadgeSimpleCode,
            options: { showAddonPanel: true }
        })
    )
    .add('Badge with text',
        exampleStory({
            component: Badge,
            example: BadgeWithTextExam,
            code: BadgeWithTetxtCode,
            options: { showAddonPanel: true }
        })
    );
