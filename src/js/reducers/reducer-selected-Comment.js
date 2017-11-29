export default function (state = null, action) {
    switch(action.type) {
        case 'SELECTED_COMMENT':
            return action.payload;
    }
    return state;
}