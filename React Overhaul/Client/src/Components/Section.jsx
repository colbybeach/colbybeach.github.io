import React from 'react'
import { Col, Row } from 'antd';

export default function Section({height, background, content, id}) {
  return (

    <div style={{height: height, background: background}} id={id}>
      <Row>
        <Col span={3}/>
        <Col item xs={18}>
            {content}
        </Col>
        <Col span={3}/>
      </Row>
    </div>
  )
}
