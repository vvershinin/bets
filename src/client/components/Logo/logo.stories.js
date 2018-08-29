import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import LogoCode from '!!raw-loader!./stories/LogoCode'; // eslint-disable-line
import { LogoExam } from './stories/ExampleComponent';
import Logo from './stories/DocComponent';

storiesOf('Logo', module)
    .add('Logo',
        exampleStory({
            component: Logo,
            example: LogoExam,
            code: LogoCode,
            options: { showAddonPanel: true }
        })
    );
