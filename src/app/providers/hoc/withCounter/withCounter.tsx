import * as classes from './withCounter.module.scss';

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;

export const withCounter =
    <T extends React.SVGProps<SVGSVGElement>>(
        IconComponent: IconComponentType
    ) =>
    (props: T & { counter: number }) => {
        const { counter } = props;
        return (
            <div className={classes.iconComponent}>
                <IconComponent {...props} />
                {counter > 0 && (
                    <span className={classes.iconComponent__counter}>
                        {counter}
                    </span>
                )}
            </div>
        );
    };
