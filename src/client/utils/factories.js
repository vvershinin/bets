const constantsTypes = ['INIT', 'SUCCESS', 'FAILURE'];


export const constants = base =>
    constantsTypes.reduce((result, type) => ({
        ...result,
        [type]: `${base}_${type}`
    }), {});

export const failureAction = (event, error) => ({
    type: event.FAILURE,
    error: true,
    payload: {
        ...error
    }
});
