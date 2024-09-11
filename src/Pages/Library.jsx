import React from "react";
import { Card, Button } from "antd";
//import 'antd/dist/antd.css'; // Make sure Ant Design CSS is imported

const { Meta } = Card;

function Library(){
 return (
  <div style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://via.placeholder.com/240x150" />}
      actions={[
        <Button type="primary">Buy Now</Button>
      ]}
    >
      <Meta title="Product Title" description="This is the product description." />
    </Card>
  </div>
);
}

export default Library;
