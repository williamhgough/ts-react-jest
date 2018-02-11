import * as React from "react";

interface InterfaceChildProps {
    items: string[];
}

class Child extends React.Component<InterfaceChildProps, undefined> {
    public render() {
        return (
            <div>
                {this.props.items.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        );
    }
}

export default Child;
