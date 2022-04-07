import { useTable, useGlobalFilter } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Grid,
  GridItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import GlobalFilter from "./GlobalFilter";

interface Props {
  columns: any;
  data: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ReportTable = ({ columns, data, onClick }: Props) => {
  const {
    getTableProps, // table prop`s from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,
    state,
    setGlobalFilter, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={4} mb={10}>
        <GridItem colSpan={[4, 2]}>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </GridItem>
        <GridItem colStart={6} colEnd={7}>
          <Flex justifyContent={"flex-end"}>
            <Button onClick={onClick} colorScheme={"brandGreen"}>
              Generate New Report
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      <TableContainer>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReportTable;
