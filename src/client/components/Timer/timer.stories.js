import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import TimerSimpleCode from '!!raw-loader!./stories/TimerSimpleCode'; // eslint-disable-line
import { TimerSimpleExam } from './stories/ExampleComponent';
import Timer from './stories/DocComponent';

storiesOf('Timer', module)
    .add('Timer simple',
        exampleStory({
            component: Timer,
            example: TimerSimpleExam,
            code: TimerSimpleCode,
            options: { showAddonPanel: true }
        })
    );
