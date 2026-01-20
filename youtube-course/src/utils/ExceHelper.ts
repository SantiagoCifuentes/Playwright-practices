
import * as EXCEL from 'xlsx';
import fs from 'fs';

interface TestRecord {
  Skill1: string;
  Skill2: string;
}

export function readExcelFile(filePath: string): TestRecord[] {
  const file = fs.readFileSync(filePath);

  const workbook = EXCEL.read(file);
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawSheetData: any[][] = EXCEL.utils.sheet_to_json(firstSheet, {
    header: 1,
    blankrows: false // Exclude blank rows because they were causing issues
  });

  const records: TestRecord[] = rawSheetData
    .slice(1)
    .filter(row => row?.[0] && row?.[1]) // Filter out rows with missing data
    .map(row => ({
      Skill1: row[0],
      Skill2: row[1]
    }));

  return records;
}
