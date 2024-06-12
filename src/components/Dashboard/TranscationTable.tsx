import { Table, TableColumnsType } from "antd";

type TableData = {
    id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: string;
}
type props ={
    tableData : TableData[]
}
const TransactionTable = ({tableData}:props) => {
    const columns : TableColumnsType<TableData>= [
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
    showSorterTooltip={{ target: 'sorter-icon' }} pagination={{
      position: ['bottomRight'],
      total: tableData.length,
      pageSize: 4,

    }}/>
  </>
  ;
};

export default TransactionTable;
