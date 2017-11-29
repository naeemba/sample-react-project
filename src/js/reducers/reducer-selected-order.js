export default function (state = null, action) {
    switch(action.type) {
        case 'SELECTED_ORDER':
            return action.payload;
    }
    return state;
}