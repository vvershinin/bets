import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import LangSimpleCode from '!!raw-loader!./stories/LangSimpleCode'; // eslint-disable-line
import { LangSimpleExam } from './stories/ExampleComponent';
import Lang from './stories/DocComponent';

storiesOf('Lang', module)
    .add('Lang simple',
        exampleStory({
            component: Lang,
            example: LangSimpleExam,
            code: LangSimpleCode,
            options: { showAddonPanel: true }
        })
    );
