import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/todoActions';

const todoReducer = (state, action) => {
    let list = JSON.parse(localStorage.getItem('todos')) || [];
    switch (action.type) {
        case INSERT:
            list.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(list));
            return { list, currentIndex: -1 };
        case UPDATE:
            list[state.currentIndex] = action.payload;
            localStorage.setItem('todos', JSON.stringify(list));
            return { list, currentIndex: -1 };
        case DELETE:
            list.splice(action.payload, 1);
            localStorage.setItem('todos', JSON.stringify(list));
            return { list, currentIndex: -1 };
        case UPDATE_INDEX:
            return { list, currentIndex: action.payload };
        default:
            return state;
    }
};

export default todoReducer;