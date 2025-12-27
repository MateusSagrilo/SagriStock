import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}
declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean
  
  onDelete?: (item : any) => void
  onDetail?: (item : any) => void
  onEdit?: (item : any) => void
}

function Table({ data, headers }: TableProps) {
  const [organizedData, indexedHeaders] = organizeData(data, headers)

  return (
    <table className="AppTable">
      <thead>
        <tr>
          {headers.map(header => (
            <th
              key={header.key}
              className={header.right ? 'right' : ''}
            >
              {header.value}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {organizedData.map((row, rowIndex) => (
          <tr key={row.$original.id ?? rowIndex}>
            {Object.keys(row).map((item, colIndex) =>
              item !== '$original' ? (
                <td
                  key={`${row.$original.id}-${colIndex}`}
                  className={indexedHeaders[item]?.right ? 'right' : ''}
                >
                  {row[item]}
                </td>
              ) : null
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table