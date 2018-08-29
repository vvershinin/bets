import { EmpireLogo, notificationImg } from '../../assets/img';

export const dataPane = [
    {
        id: '0',
        matchName: 'Greyhoud VS Acpor',
        logo: EmpireLogo,
        name: 'Acpor',
        isWin: false,
        rate: 1.55,
        isAir: false,
        rateAll: 1.70,
        inputValue: 100,
        profit: '$ 170.00',
        currency: '$'
    },
    {
        id: '1',
        matchName: 'Greyhoud VS Acpor',
        logo: EmpireLogo,
        name: 'Acpor',
        isWin: true,
        rate: 1.55,
        isAir: true,
        rateAll: 1.70,
        inputValue: 100,
        profit: '$ 170.00',
        currency: '$'
    }
];

export const betsSelect = [
    { key: '500', text: '500', value: 500 },
    { key: '1000', text: '1000', value: 1000 },
    { key: '1500', text: '1500', value: 1500 },
    { key: '2000', text: '2000', value: 2000 },
    { key: '2500', text: '2500', value: 2500 }
];

export const dataNotification = [{
    img: notificationImg,
    text: 'Фрибет €10 / ₽700 для новых игроков. ' +
    'Для активации необходимо внести депозит от €10 / ₽700. ' +
    'Минимальный коэффициент 1.7, максимальная отыгранная сумма €10 / ₽700.'
}, {
    img: notificationImg,
    text: 'Фрибет €10 / ₽700 для новых игроков. ' +
    'Для активации необходимо внести депозит от €10 / ₽700. ' +
    'Минимальный коэффициент 1.7, максимальная отыгранная сумма €10 / ₽700.'
}, {
    img: notificationImg,
    text: 'Фрибет €10 / ₽700 для новых игроков. ' +
    'Для активации необходимо внести депозит от €10 / ₽700. ' +
    'Минимальный коэффициент 1.7, максимальная отыгранная сумма €10 / ₽700.'
}, {
    img: notificationImg,
    text: 'Фрибет €10 / ₽700 для новых игроков. ' +
    'Для активации необходимо внести депозит от €10 / ₽700. ' +
    'Минимальный коэффициент 1.7, максимальная отыгранная сумма €10 / ₽700.'
}];
