import React from "react";
import Title from "../../../../components/Title";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";

const Request = () => {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    types: {
      email: "email is not a valid email!",
    },
    name: {
      range: "Họ tên is required!",
    },
  };
  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  return (
    <>
      <div className="flex-1">
        <Title title="Yêu cầu dịch vụ của khách hàng" />
        <Form
          className="mt-5"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item rules={[{ required: true }]}>
            <Input placeholder="Họ Tên" />
          </Form.Item>
          <Form.Item rules={[{ type: "email" }]}>
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Tiêu đề" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Số điện thoại" type="number" />
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Request;
