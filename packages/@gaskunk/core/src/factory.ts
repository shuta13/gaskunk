import { Table } from './sheets/table';

export const entityContainerFactory = (
  sheets: GoogleAppsScript.Spreadsheet.Spreadsheet
) => {
  const table = new Table(sheets);
  return {
    table: table,
  };
};
