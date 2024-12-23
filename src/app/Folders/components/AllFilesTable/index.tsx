import { FAKE_DATA_ALL_FILES_TALBE } from "@/utils/fakeData"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export const AllFilesTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={FAKE_DATA_ALL_FILES_TALBE} />
    </div>
  )
}