import { Link } from './Link/Link';
import type { LinkComponent } from './Link/Link';
import { Separator } from './Separator/Separator';
import type { SeparatorComponent } from './Separator/Separator';

type Choose = {
    Link: LinkComponent
    Separator: SeparatorComponent
}

export const Choose: Choose = Object.assign({
    Link: Link,
    Separator: Separator
})