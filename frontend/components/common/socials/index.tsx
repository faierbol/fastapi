import clsx from 'clsx';
import React, { CSSProperties, ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../assets/theme';
import useTrans from '../../../hooks/trans.hook';

const useStyles = createUseStyles((theme: Theme) => ({
    list: {
        display: 'flex',
        marginTop: theme.rem(2),
        marginLeft: theme.rem(-1.4),

        ...theme.media(768).max({
            marginTop: theme.rem(1),
        }),
    },
    center: {
        justifyContent: 'center',
        marginLeft: 0,
    },
    title: {
        fontSize: theme.rem(1.4),
        fontWeight: theme.text.weight[3],

        ...theme.media(768).max({
            fontSize: theme.rem(1.6),
        }),
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.rem(4),
        width: theme.rem(4),
        marginRight: theme.rem(1.5),
        transition: theme.transitions[0],
        fill: theme.palette.black[0],

        ...theme.hover({
            transform: 'translateY(-0.2rem)',
            fill: theme.palette.primary[0],
        }),

        ...theme.media(768).max({
            height: theme.rem(5),
            width: theme.rem(5),
        }),
    },
    margin: {
        margin: 0,
    },
    svg: {
        height: theme.rem(1.8),
        width: theme.rem(1.8),
        fill: 'inherit',

        ...theme.media(768).max({
            height: theme.rem(2),
            width: theme.rem(2),
        }),
    },
}));

interface IProps {
    center?: boolean;
    style?: CSSProperties;
}

const Socials = ({ center = false, style = {} }: IProps): ReactElement => {
    const css = useStyles();
    const trans = useTrans();

    return (
        <div style={style}>
            <h3 className={css.title}>{trans('social_networks')}</h3>
            <ul className={clsx(css.list, center && css.center)}>
                <li>
                    <a
                        className={clsx(css.link, center && css.margin)}
                        href="https://www.facebook.com/domain.inc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            id="Bold"
                            enableBackground="new 0 0 24 24"
                            viewBox="0 0 24 24"
                        >
                            <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={clsx(css.link, center && css.margin)}
                        href="https://www.instagram.com/domain/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            id="Bold"
                            enableBackground="new 0 0 24 24"
                            viewBox="0 0 24 24"
                        >
                            <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
                            <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
                            <circle cx="18.406" cy="5.595" r="1.439" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={clsx(css.link, center && css.margin)}
                        href="http://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 -47 512.00004 512">
                            <path d="m512 55.964844c-32.207031 1.484375-31.503906 1.363281-35.144531 1.667968l19.074219-54.472656s-59.539063 21.902344-74.632813 25.820313c-39.640625-35.628907-98.5625-37.203125-140.6875-11.3125-34.496094 21.207031-53.011719 57.625-46.835937 100.191406-67.136719-9.316406-123.703126-41.140625-168.363282-94.789063l-14.125-16.964843-10.554687 19.382812c-13.339844 24.492188-17.769531 52.496094-12.476563 78.851563 2.171875 10.8125 5.863282 21.125 10.976563 30.78125l-12.117188-4.695313-1.4375 20.246094c-1.457031 20.566406 5.390625 44.574219 18.320313 64.214844 3.640625 5.53125 8.328125 11.605469 14.269531 17.597656l-6.261719-.960937 7.640625 23.199218c10.042969 30.480469 30.902344 54.0625 57.972657 67.171875-27.035157 11.472657-48.875 18.792969-84.773438 30.601563l-32.84375 10.796875 30.335938 16.585937c11.566406 6.324219 52.4375 27.445313 92.820312 33.78125 89.765625 14.078125 190.832031 2.613282 258.871094-58.664062 57.308594-51.613282 76.113281-125.03125 72.207031-201.433594-.589844-11.566406 2.578125-22.605469 8.921875-31.078125 12.707031-16.964844 48.765625-66.40625 48.84375-66.519531zm-72.832031 48.550781c-10.535157 14.066406-15.8125 32.03125-14.867188 50.578125 3.941407 77.066406-17.027343 136.832031-62.328125 177.628906-52.917968 47.660156-138.273437 66.367188-234.171875 51.324219-17.367187-2.722656-35.316406-8.820313-50.171875-14.910156 30.097656-10.355469 53.339844-19.585938 90.875-37.351563l52.398438-24.800781-57.851563-3.703125c-27.710937-1.773438-50.785156-15.203125-64.96875-37.007812 7.53125-.4375 14.792969-1.65625 22.023438-3.671876l55.175781-15.367187-55.636719-13.625c-27.035156-6.621094-42.445312-22.796875-50.613281-35.203125-5.363281-8.152344-8.867188-16.503906-10.96875-24.203125 5.578125 1.496094 12.082031 2.5625 22.570312 3.601563l51.496094 5.09375-40.800781-31.828126c-29.398437-22.929687-41.179687-57.378906-32.542969-90.496093 91.75 95.164062 199.476563 88.011719 210.320313 90.527343-2.386719-23.183593-2.449219-23.238281-3.074219-25.445312-13.886719-49.089844 16.546875-74.015625 30.273438-82.453125 28.671874-17.621094 74.183593-20.277344 105.707031 8.753906 6.808593 6.265625 16.015625 8.730469 24.632812 6.589844 7.734375-1.921875 14.082031-3.957031 20.296875-6.171875l-12.9375 36.945312 16.515625.011719c-3.117187 4.179688-6.855469 9.183594-11.351562 15.183594zm0 0" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={clsx(css.link, center && css.margin)}
                        href="https://t.me/domain"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className={css.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 -39 512.00011 512">
                            <path d="m504.09375 11.859375c-6.253906-7.648437-15.621094-11.859375-26.378906-11.859375-5.847656 0-12.042969 1.230469-18.410156 3.664062l-433.398438 165.441407c-23 8.777343-26.097656 21.949219-25.8984375 29.019531s4.0390625 20.046875 27.4999995 27.511719c.140626.042969.28125.085937.421876.125l89.898437 25.726562 48.617187 139.023438c6.628907 18.953125 21.507813 30.726562 38.835938 30.726562 10.925781 0 21.671875-4.578125 31.078125-13.234375l55.605469-51.199218 80.652344 64.941406c.007812.007812.019531.011718.027343.019531l.765625.617187c.070313.054688.144532.113282.214844.167969 8.964844 6.953125 18.75 10.625 28.308594 10.628907h.003906c18.675781 0 33.546875-13.824219 37.878906-35.214844l71.011719-350.640625c2.851563-14.074219.460937-26.667969-6.734375-35.464844zm-356.191406 234.742187 173.441406-88.605468-107.996094 114.753906c-1.769531 1.878906-3.023437 4.179688-3.640625 6.683594l-20.824219 84.351562zm68.132812 139.332032c-.71875.660156-1.441406 1.25-2.164062 1.792968l19.320312-78.25 35.144532 28.300782zm265.390625-344.566406-71.011719 350.644531c-.683593 3.355469-2.867187 11.164062-8.480468 11.164062-2.773438 0-6.257813-1.511719-9.824219-4.257812l-91.390625-73.585938c-.011719-.011719-.027344-.023437-.042969-.03125l-54.378906-43.789062 156.175781-165.949219c5-5.3125 5.453125-13.449219 1.074219-19.285156-4.382813-5.835938-12.324219-7.671875-18.820313-4.351563l-256.867187 131.226563-91.121094-26.070313 433.265625-165.390625c3.660156-1.398437 6.214844-1.691406 7.710938-1.691406.917968 0 2.550781.109375 3.15625.855469.796875.972656 1.8125 4.289062.554687 10.511719zm0 0" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
