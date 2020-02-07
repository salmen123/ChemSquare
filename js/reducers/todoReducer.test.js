import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/todoActions'
import todoReducer from "./todoReducer";

describe('todoReducer', () => {
    it('should handle INSERT', () => {
        // set up old state, expected states and actions
        const state = {
            currentIndex: -1,
            list: []
        };
        const action1 = {
            type: INSERT,
            payload: {todo: "todo1", description: "desc1", priority: "1", done: "false"}
        };
        const action2 = {
            type: INSERT,
            payload: {todo: "todo2", description: "desc2", priority: "2", done: "true"}
        };
        const action3 = {
            type: INSERT,
            payload: {todo: "todo3", description: "desc3", priority: "3", done: "true"}
        };
        const expectedState1 = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"}
            ]
        };
        const expectedState2 = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "todo2", description: "desc2", priority: "2", done: "true"}
            ]
        };
        const expectedState3 = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "todo2", description: "desc2", priority: "2", done: "true"},
                {todo: "todo3", description: "desc3", priority: "3", done: "true"}
            ]
        };

        // test reducer
        const result1 = todoReducer(state, action1);
        const result2 = todoReducer(state, action2);
        const result3 = todoReducer(state, action3);
        expect(result1).toEqual(expectedState1);
        expect(result2).toEqual(expectedState2);
        expect(result3).toEqual(expectedState3);
    });

    it('should handle UPDATE', () => {
        // set up old state, expected state and action
        const state = {
            currentIndex: 1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "todo2", description: "desc2", priority: "2", done: "true"},
                {todo: "todo3", description: "desc3", priority: "3", done: "true"}
            ]
        };
        const action = {
            type: UPDATE,
            payload: {todo: "TODO2", description: "DESC2", priority: "2", done: "false"}
        };
        const expectedState = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "TODO2", description: "DESC2", priority: "2", done: "false"},
                {todo: "todo3", description: "desc3", priority: "3", done: "true"}
            ]
        };

        // test reducer
        const result = todoReducer(state, action);
        expect(result).toEqual(expectedState);
    });

    it('should handle DELETE', () => {
        // set up old state, expected state and action
        const state = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "TODO2", description: "DESC2", priority: "2", done: "false"},
                {todo: "todo3", description: "desc3", priority: "3", done: "true"}
            ]
        };
        const action = {
            type: DELETE,
            payload: 2
        };
        const expectedState = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "TODO2", description: "DESC2", priority: "2", done: "false"}
            ]
        };

        // test reducer
        const result = todoReducer(state, action);
        expect(result).toEqual(expectedState);
    });

    it('should handle UPDATE_INDEX', () => {
        // set up old state, expected state and action
        const state = {
            currentIndex: -1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "TODO2", description: "DESC2", priority: "2", done: "false"}
            ]
        };
        const action = {
            type: UPDATE_INDEX,
            payload: 1
        };
        const expectedState = {
            currentIndex: 1,
            list: [
                {todo: "todo1", description: "desc1", priority: "1", done: "false"},
                {todo: "TODO2", description: "DESC2", priority: "2", done: "false"}
            ]
        };

        // test reducer
        const result = todoReducer(state, action);
        expect(result).toEqual(expectedState);
    });
});