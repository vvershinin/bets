import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import DNSSimpleCode from '!!raw-loader!./stories/DNSSimpleCode'; // eslint-disable-line
import { DNSSimpleExam } from './stories/ExampleComponent';
import DNS from './stories/DocComponent';

storiesOf('DayNightSwitcher', module)
    .add('DayNightSwitcher simple',
        exampleStory({
            component: DNS,
            example: DNSSimpleExam,
            code: DNSSimpleCode,
            options: { showAddonPanel: true }
        })
    );
