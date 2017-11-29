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