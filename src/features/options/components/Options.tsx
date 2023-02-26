import { Button, Card, Input, InputNumber, Radio, RadioChangeEvent, Space, Typography } from "antd";
import { FC, useState } from "react";
import { FcCursor } from "react-icons/fc";

import { SectionWrapper } from "~components/SectionWrapper/SectionWrapper";

import * as Styles from "./Options.styles";

const { Title, Text } = Typography;

const Options: FC = () => {
  const [vertical, setVertical] = useState("center");
  const [horizontal, setHorizontal] = useState("center");
  const [showMode, setShowMode] = useState("tab");
  const [verticalSpace, setVerticalSpace] = useState<number | null>(0);
  const [horizontalSpace, setHorizontalSpace] = useState<number | null>(0);

  const onChangeVertical = (e: RadioChangeEvent) => {
    if (typeof e.target.value === "string") {
      setVertical(e.target.value);
    }
  };

  const onChangeHorizontal = (e: RadioChangeEvent) => {
    if (typeof e.target.value === "string") {
      setHorizontal(e.target.value);
    }
  };

  const onChangeShowMode = (e: RadioChangeEvent) => {
    if (typeof e.target.value === "string") {
      setShowMode(e.target.value);
    }
  };

  return (
    <Styles.Root>
      <Title italic underline>
        Quick Search ~ Setting
      </Title>

      <SectionWrapper sectionName="Icon Position">
        <Styles.SectionWrapper>
          <div>
            <Space direction="vertical">
              <Text strong>Vertical</Text>
              <Radio.Group onChange={onChangeVertical} value={vertical}>
                <Radio value={"top"}>top</Radio>
                <Radio value={"center"}>center</Radio>
                <Radio value={"bottom"}>bottom</Radio>
              </Radio.Group>
              <InputNumber
                addonBefore="Space"
                value={verticalSpace}
                onChange={(value) => {
                  setVerticalSpace(value);
                }}
              />

              <Text strong>Horizontal</Text>
              <Radio.Group onChange={onChangeHorizontal} value={horizontal}>
                <Radio value={"left"}>left</Radio>
                <Radio value={"center"}>center</Radio>
                <Radio value={"right"}>right</Radio>
              </Radio.Group>
              <InputNumber
                addonBefore="Space"
                value={horizontalSpace}
                onChange={(value) => {
                  setHorizontalSpace(value);
                }}
              />
            </Space>
          </div>

          <Card title="Demo" style={{ width: 200 }}>
            <FcCursor style={{ width: "25px", height: "25px" }} />
          </Card>
        </Styles.SectionWrapper>
      </SectionWrapper>

      <SectionWrapper sectionName="Search Word">
        <Styles.SectionWrapper>
          <Space direction="vertical">
            <Text strong>Prefix</Text>
            <Input placeholder="Prefix" />
            <Text strong>Suffix</Text>
            <Input placeholder="Suffix" />
          </Space>

          <Card title="Demo" style={{ width: 200 }}>
            Selected Text
          </Card>
        </Styles.SectionWrapper>
      </SectionWrapper>

      <SectionWrapper sectionName="Show Mode">
        <Radio.Group onChange={onChangeShowMode} value={showMode}>
          <Radio value={"tab"}>tab</Radio>
          <Radio value={"window"}>window</Radio>
        </Radio.Group>
      </SectionWrapper>

      <Button type="primary" size="large" block>
        Save
      </Button>
    </Styles.Root>
  );
};

export { Options };
