import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Drawer, Form, Input, message, Select, Upload } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduxhooks';
import { addProduct, editProduct } from '../../Redux/Slice/productSlice';
import { ProductProps } from './types';
const { Option } = Select;

type Props = {
  open: boolean;
  onClose: () => void;
  editData: ProductProps;
  isEdit: boolean;
};

const EditAndDelete = ({ open, onClose, editData, isEdit }: Props) => {
  const [form] = useForm();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isEdit && editData) {
      form.setFieldsValue({
        productName: editData.name,
        price: editData.price,
        category: editData.category,
      });
    } else {
      form.resetFields();

    }
  }, [isEdit, editData, form]);

  const handleFinish = () => {
    console.log('Finish:', form.getFieldsValue());
      
     isEdit ? dispatch(editProduct(form.getFieldsValue())) : dispatch(addProduct(form.getFieldsValue()));
      
    onClose();
  };
  const uploadProps: UploadProps = {
    name: 'file',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  return (
    <>
      <Drawer
        title={isEdit ? 'Edit Product' : 'Add Product'}
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
      >
        <div className="formContainer">
          <Form layout="vertical" onFinish={handleFinish} form={form}>
            <Form.Item
              name="name"
              label="Product Name"
              rules={[{ required: true, message: 'Please enter the product name' }]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please enter the price' }]}
            >
              <Input type="number" placeholder="Enter price" />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select placeholder="Select a category">
                <Option value="electronics">Electronics</Option>
                <Option value="fashion">Fashion</Option>
                <Option value="grocery">Grocery</Option>
                <Option value="home">Home</Option>
                <Option value="beauty">Beauty</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="stocks"
              label="Stocks"
              rules={[{ required: true, message: 'Please enter the stocks' }]}
            >
              <Input type="number" placeholder="Enter stocks" />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image"
              // rules={[{ required: true, message: 'Please upload an image' }]}
            >
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {isEdit ? 'Update' : 'Save'}
              </Button>
            </Form.Item>
           
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default EditAndDelete;
