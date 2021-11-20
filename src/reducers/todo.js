const initData = [];

const todo = (state = initData, action) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.data];
        }
        case 'DELETE': {
            return state.filter((item) => item.id !== action.id)
        }
        default: {
            return state;
        }
    }
}

export default todo;