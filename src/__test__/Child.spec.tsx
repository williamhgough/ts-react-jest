import { HTMLAttributes, shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import Child from "../Child";

// Create mock props
const testChildProps = {
    items: ["1", "2", "3"],
};

// render out child component
let child: ShallowWrapper<undefined, undefined>;
beforeEach(() => (child = shallow(<Child {...testChildProps} />)));

// Test for the happy path
it("Should render without error", () => expect(child.length).toBe(1));

it("Should render paragraph for each item in props", () => {
    const pNodes: ShallowWrapper<HTMLAttributes, undefined> = child.find("p");
    expect(pNodes.length).toBe(testChildProps.items.length);
});
