// import  { useEffect, useState } from 'react';
import {  Button, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useState } from 'react';

import { useAppSelector } from '../../hooks/reduxhooks';
import { ProductProps } from './types';
import EditAndDelete from './EditAndDelete';

const Product = () => {
  const productData = useAppSelector((state) => state.product.products);
  const [editData  , setEditData] = useState<ProductProps>({} as ProductProps)
  const [open, setOpen] = useState(false);
  const [isEdit  , setIsEdit] = useState(false)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setIsEdit(false);
    setEditData({} as ProductProps)
  };
  const columns: ColumnProps<ProductProps>[] = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="" className="productImg" />,
      responsive: ['xs', 'sm', 'md'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      responsive: ['xs', 'sm', 'md'],
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      responsive: ['xs', 'sm', 'md'],
    },
    {
      title: 'Stock',
      dataIndex: 'stocks',
      key: 'stocks',
      responsive: ['xs', 'sm', 'md'],
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      responsive: ['sm', 'md'],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      responsive: ['xs', 'sm', 'md'],
      render: (_, record) => (
        <Button onClick={()=> {setOpen(true) , setEditData(record), setIsEdit(true)}}>Manage</Button>
      )
    },
  ];

  return (
    <div className="productContainer">
      <div className="productInfo">
        <h2>Products</h2>
        <button className="productBtn" onClick={showDrawer} > + </button>
      </div>
      <Table 
        dataSource={productData} 
        columns={columns} 
        rowKey='id'
        scroll={{ x: 'max-content'}} 
        pagination={{
          position: ['bottomRight'],
          total: productData.length,
          pageSize: 4,
        }} 
      />
    <EditAndDelete open={open} onClose={onClose}  editData={editData} isEdit={isEdit}  />
      
    </div>
  );
};

export default Product;