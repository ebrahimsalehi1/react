/* eslint-disable no-console */

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, SortDirection, Table,List } from 'react-virtualized';

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

function MuiVirtualizedTable(props) {
  
  const { classes, columns, ...tableProps } = props;

  const getRowClassName = ({ index }) => {
    const { classes, rowClassName, onRowClick } = props;

    return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  const cellRenderer = ({ cellData, columnIndex = null }) => {
    const { columns, classes, rowHeight, onRowClick } = props;
    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  const headerRenderer = ({ label, columnIndex, dataKey, sortBy, sortDirection }) => {
    const { headerHeight, columns, classes, sort } = props;
    const direction = {
      [SortDirection.ASC]: 'asc',
      [SortDirection.DESC]: 'desc',
    };

    const inner =
      !columns[columnIndex].disableSort && sort != null ? (
        <TableSortLabel active={dataKey === sortBy} direction={direction[sortDirection]}>
          {label}
        </TableSortLabel>
      ) : (
        label
      );

    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        {inner}
      </TableCell>
    );
  };



  return (
    // <ul>
    //   {
    //     [...Array(1000000).keys()].map(item=>(
    //       <li key={item}>Row {item}</li>
    //     ))
    //   }
    // </ul>
    <AutoSizer>
      {
        ({height,width})=>(
          <Table
          className={classes.table}
          height={height}
          width={width}
          {...tableProps} 
          rowClassName={getRowClassName}
          >
            {columns.map(({ cellContentRenderer = null, className, dataKey, ...other }, index) => {
              let renderer;
              // if (cellContentRenderer != null) {
              //   renderer = cellRendererProps =>
              //     cellRenderer({
              //       cellData: cellContentRenderer(cellRendererProps),
              //       columnIndex: index,
              //     });
              // } else {
              //   renderer = cellRenderer;
              // }

              return (
                <Column
                  key={dataKey}
                  // headerRenderer={headerProps =>
                  //   headerRenderer({
                  //     ...headerProps,
                  //     columnIndex: index,
                  //   })
                  // }
                  //className={classNames(classes.flexContainer, className)}
                  //cellRenderer={renderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )
      }
    </AutoSizer>
  );
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      cellContentRenderer: PropTypes.func,
      dataKey: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowClassName: PropTypes.string,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  sort: PropTypes.func,
};

MuiVirtualizedTable.defaultProps = {
  headerHeight: 56,
  rowHeight: 36,
};

const WrappedVirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const data = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

let id = 0;
function createData(dessert, calories, fat, carbs, protein) {
  id += 1;
  return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < 1000; i += 1) {
  const randomSelection = data[Math.floor(Math.random() * data.length)];
  rows.push(createData(...randomSelection));
  console.log(rows[i]);
}

function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <WrappedVirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        onRowClick={event => console.log(event)}
        columns={[
          {
            width: 200,
            flexGrow: 1.0,
            label: 'Dessert',
            dataKey: 'dessert',
          },
          {
            width: 120,
            label: 'Calories (g)',
            dataKey: 'calories',
            numeric: true,
          },
          {
            width: 120,
            label: 'Fat (g)',
            dataKey: 'fat',
            numeric: true,
          },
          {
            width: 120,
            label: 'Carbs (g)',
            dataKey: 'carbs',
            numeric: true,
          },
          {
            width: 120,
            label: 'Protein (g)',
            dataKey: 'protein',
            numeric: true,
          },
          {
            width: 120,
            label: 'Row Num',
            dataKey: 'protein',
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}

export default ReactVirtualizedTable;
