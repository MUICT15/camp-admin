import React from 'react';
import { Card, Col, Tag } from 'antd';
import styled from 'styled-components';

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Question = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 4px;
`;

const Answer = styled.span`
  font-size: 16px;
`;

const RegistrantProfile = props => (
  <div>
    <Card loading={props.isLoading} noHovering>
      <Col span={5}>
        <img style={{ backgroundColor: "#777", height: 150, width: 150 }} />
      </Col>
      <Col span={8}>
        <Tag color="#108ee9">Web Programming</Tag>
        <Label style={{ marginTop: 8 }}>นายศุภณัฐ เตชโสทร</Label>
        <Label>Supanat Techasothon</Label>
        <p style={{ marginTop: 10 }}>
          <Question>ชื่อเล่น: </Question>
          <Answer>ทอย</Answer>
        </p>
        <p>
          <Question>เพศ: </Question>
          <Answer>ชาย</Answer>
        </p>
      </Col>
      <Col span={8}>
        <p>
          <Question>ชื่อมหาวิทยาลัย: </Question>
          <Answer>มหิดล</Answer>
        </p>
        <p>
          <Question>ชั้นปี: </Question>
          <Answer>1</Answer>
        </p>
        <p>
          <Question>คณะ: </Question>
          <Answer>วิทยาศาสตร์ และเทคโนโลยี</Answer>
        </p>
        <p>
          <Question>สาขา: </Question>
          <Answer>วิทยาการคอมพิวเตอร์</Answer>
        </p>
      </Col>
    </Card>
    <Card
      loading={props.isLoading}
      noHovering
      title="ข้อมูลติดต่อ"
      style={{ marginTop: 20 }}
    >
      <p>
        <Question>ที่อยู่: </Question>
        <Answer>
          2255/2313 หมู่ 111 หมู่บ้านศรีสวัสดิ์เงินติดล้อ ซอยรุ่งเรือง ต.บกกกก
          อ.กกกกก
        </Answer>
      </p>
      <p>
        <Question>จังหวัด: </Question>
        <Answer>ร้อยเอ็ด</Answer>
      </p>
      <p>
        <Question>Email: </Question>
        <Answer>Supanat Techasothon</Answer>
      </p>
      <p>
        <Question>เบอร์ติดต่อ: </Question>
        <Answer>0908454505</Answer>
      </p>
      <p style={{ marginTop: 15 }}>
        <Question>เบอร์ติดต่อฉุนเฉิน: </Question>
        <Answer>0908454505</Answer>
      </p>
      <p>
        <Question>เกี่ยวข้องเป็น: </Question>
        <Answer>พ่อ</Answer>
      </p>
    </Card>
    <Card
      loading={props.isLoading}
      noHovering
      title="ข้อมูลเพิ่มเติม"
      style={{ marginTop: 20 }}
    >
      <Col span={12}>
        <p>
          <Question>วันเกิด: </Question>
          <Answer>26/10/2537</Answer>
        </p>
        <p>
          <Question>กรุ๊ปเลือด: </Question>
          <Answer>A</Answer>
        </p>
        <p>
          <Question>ศาสนา: </Question>
          <Answer>พุทธ</Answer>
        </p>
        <p>
          <Question>ไซส์เสื้อ: </Question>
          <Answer>M</Answer>
        </p>
      </Col>
      <Col span={12}>
        <p>
          <Question>โรคประจำตัว: </Question>
          <Answer>มี</Answer>
        </p>
        <p style={{ paddingLeft: 40 }}>
          <Question>ชื่อโรคประจำตัว: </Question>
          <Answer>M</Answer>
        </p>
        <p style={{ paddingLeft: 40 }}>
          <Question>ยาที่ใช้ประจำ: </Question>
          <Answer>M</Answer>
        </p>

        <p>
          <Question>ยาที่แพ้: </Question>
          <Answer />
        </p>
        <p>
          <Question>อาหารที่รับประทาน: </Question>
          <Answer>ปกติ</Answer>
        </p>
        <p>
          <Question>อาหารที่แพ้: </Question>
          <Answer>กุ้ง</Answer>
        </p>
      </Col>
    </Card>
    <Card
      loading={props.isLoading}
      noHovering
      title="ข้อมูลเพิ่มเติม"
      style={{ marginTop: 20 }}
    >
      <p>
        <Question>รู้จักค่ายได้ผ่านช่องทางไหน: </Question>
        <Answer>มีคนบอกต่อ จากรุ่นพี่ เพื่อนๆ</Answer>
      </p>
    </Card>
  </div>
);

export default RegistrantProfile;
