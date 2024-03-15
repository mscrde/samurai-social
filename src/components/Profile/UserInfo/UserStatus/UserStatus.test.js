import { act, create } from "react-test-renderer"
import { UserStatus } from "./UserStatus"

describe("UserStatus component tests", () => {
    test("status from props should be in state", () => {
        const component = create(<UserStatus status="lalala" />);
        const root = component.root;
        expect(root.findByType('span').children).toEqual(["lalala"]);
    })

    test("input should't show, but span should show", () => {
        const component = create(<UserStatus status="lalala" />);
        const root = component.root;
        expect(root.findAllByType('input').length).toBe(0);
        expect(root.findAllByType('span').length).toBe(1);
    })

    test("after double click input should show, but span should't show", () => {
        const component = create(<UserStatus status="lalala" />);
        const root = component.root;
        act(() => root.findByType('span').props.onDoubleClick()) 
        expect(root.findAllByType('input').length).toBe(1);
        expect(root.findAllByType('span').length).toBe(0);
    })

    test("after input blur status should be update", () => {
        const updateUserStatusMock = jest.fn();
        const component = create(<UserStatus status="lalala" updateUserStatus={updateUserStatusMock}/>);
        const root = component.root;
        act(() => root.findByType('span').props.onDoubleClick()) 
        act(() => root.findByType('input').props.onBlur()) 
        expect(updateUserStatusMock.mock.calls.length).toBe(1);
    })
})