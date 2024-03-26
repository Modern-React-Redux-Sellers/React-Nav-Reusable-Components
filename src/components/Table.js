import {Fragment} from "react";

const Table = ({data, config, keyFn}) => {

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label} className="p-2">{column.render(rowData)}</td>
        })

        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>
        )
    })//end renderedRows

    const renderedHeaders = config.map((column) => {
        //if column contains a header property, call the function in header to display different header, else return basic header
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return <th key={column.label}>{column.label}</th>
    }); //end renderedHeaders


    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
        {renderedRows}
        </tbody>
    </table>
}

export default Table;