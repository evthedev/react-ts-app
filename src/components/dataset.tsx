import * as React from 'react';

interface Props extends React.Props<DataSet> {
    items: string;
}

class DataSet extends React.Component<Props, {}> {
    render() {
        return (
            <div>
               <h3>Dataset</h3> 
               <p>The value of items is {this.props.items}</p>
            </div>
        );
    }
}

export default DataSet;