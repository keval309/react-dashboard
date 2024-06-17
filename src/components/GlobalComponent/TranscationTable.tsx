import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

type TableData = {
    id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: string;
}
type props ={
    tableData : TableData[]
    pagination : boolean
}
const TransactionTable = ({tableData , pagination}:props) => {
    const columns : ColumnsType<TableData>= [
        {
          title: 'transaction Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'Amount',
          sorter: (a, b) => a.amount - b.amount,
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
          sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            sorter: (a, b) => a.discount - b.discount,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',

        }
    ]
   
  return <>
    <Table columns={columns} dataSource={tableData} rowKey="id" className="custom-table"  
      showSorterTooltip={{ target: 'sorter-icon' }}
    pagination={pagination ?   {
      position: ['bottomRight'],
      total: tableData.length,
      pageSize: 5,
    }: false }

    rowHoverable={false}
  />
  </>
  ;
};

export default TransactionTable;
