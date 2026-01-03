import React from 'react'
import './Table.scss'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'

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

function Table({ data, headers, enableActions, onEdit, onDelete, onDetail }: TableProps) {
  const [organizedData, indexedHeaders] = organizeData(data, headers)

  return (
    <table className="AppTable">
      <thead>
        <tr>
          {headers.map(header => 
            <th
              key={header.key}
              className={header.right ? 'right' : ''}
            >
              {header.value}
            </th>
          )
        }

        {
          enableActions && <th className='right'>
            Actions
          </th>
        }
        </tr>
      </thead>

      <tbody>
        {organizedData.map((row, rowIndex) => (
          <tr key={row.$original.id ?? rowIndex}>
            {Object.keys(row).map((item, colIndex) =>
              item !== '$original' ? 
                <td
                  key={`${row.$original.id}-${colIndex}`}
                  className={indexedHeaders[item]?.right ? 'right' : ''}
                >
                  {row[item]}
                </td>
              : null
            )
          }

          {
            enableActions && <td className='actions right'>
              {
                onEdit &&
                  <Button
                      onClick={() => onEdit && onEdit(row)}>
                        Edit
                      </Button>
              }
              {
                onDelete &&
                  <Button
                      onClick={() => onDelete && onDelete(row)}>
                        Delete
                      </Button>
              }
              {
                onDetail &&
                  <Button
                      onClick={() => onDetail && onDetail(row)}>
                        Detail
                      </Button>
              }
            </td>
          }
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table