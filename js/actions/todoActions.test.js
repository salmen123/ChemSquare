import {
    INSERT, insert,
    UPDATE, update,
    DELETE, Delete,
    UPDATE_INDEX, updateIndex
} from './todoActions';

describe('todoActions', () => {
    it('should create a INSERT action', () => {
        const data= {todo: "todo1", description: "desc1", priority: "1", done: "false"};
        const expected = {
            type: INSERT,
            payload: data
        };
        const result = insert(data);
        expect(result.type).toEqual(expected.type);
        expect(result.payload).toEqual(expected.payload);
    });

    it('should create a UPDATE action', () => {
        const data= {todo: "todo2", description: "desc2", priority: "2", done: "true"};
        const expected = {
            type: UPDATE,
            payload: data
        };
        const result = update(data);
        expect(result.type).toEqual(expected.type);
        expect(result.payload).toEqual(expected.payload);
    });

    it('should create a DELETE action', () => {
        const id = 4;
        const expected = {
            type: DELETE,
            payload: id
        };
        const result = Delete(id);
        expect(result.type).toEqual(expected.type);
        expect(result.payload).toEqual(expected.payload);
    });

    it('should create a UPDATE_INDEX action', () => {
        const index = 2;
        const expected = {
            type: UPDATE_INDEX,
            payload: index
        };
        const result = updateIndex(index);
        expect(result.type).toEqual(expected.type);
        expect(result.payload).toEqual(expected.payload);
    });
});