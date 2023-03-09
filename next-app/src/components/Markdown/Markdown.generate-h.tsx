import { DynamicComponent } from '../DynamicComponent';

export const generateH = (tag: string) => {
    return ({ node: _, ...props }) => {
        const title = props.children[0];
        const sharp = +(tag.match(/\d+$/)?.[0] || 0);

        const prefix =
            sharp > 1
                ? Array.from({ length: sharp })
                      .map(() => '#')
                      .join('')
                : '';

        return (
            <DynamicComponent id={title} is={tag} className="group relative md-title">
                <a
                    className="absolute translate-x-[-100%] hidden group-hover:inline-block"
                    style={{ color: '#999' }}
                    href={`#${title}`}
                >
                    <i className="fa fa-link"></i>
                </a>
                {prefix} {title}
            </DynamicComponent>
        );
    };
};
