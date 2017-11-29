export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};

export const selectedOrder = (order) => {
    return {
        type: 'SELECTED_ORDER',
        payload: order
    };
};

export const selectedComments = (comment) => {
    return {
        type: 'SELECTED_COMMENT',
        payload: comment
    };
};