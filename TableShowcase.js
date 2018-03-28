import React from 'react'
import PropTypes from 'prop-types'

import { SectionContainer } from '../../shared'
import './TableShowcase.sass'


const extractCells = (row) => {
  const cells = row.split(',')

  return cells.map( (cell, cellIdx) => <td key={cellIdx}>{cell}</td> );
}

const renderRows = (rows) => {
  const tableRows = rows.map( (row, rowIdx) => {
    return <tr key={rowIdx}>{extractCells(row)}</tr>
  })

  return tableRows;
}

const TableShowcase = ({title, tableData}) => {
  const rowsList = JSON.parse(tableData)

  return (
    <div className="table-showcase">
      <table className="table-ext">
        <thead>
          {renderRows(rowsList.filter((row, idx) => idx < 1))}
        </thead>
        <tbody>
          {renderRows(rowsList.filter((row, idx) => idx > 0))}
        </tbody>
      </table>
    </div>
  )
}

PropTypes.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.string.isRequired,
}

export default TableShowcase
