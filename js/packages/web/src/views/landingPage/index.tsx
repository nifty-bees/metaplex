import { Avatar, Image, Layout, Row, Col, Statistic, Button } from 'antd';
import React, { useState } from 'react';
const style = { padding: '8px 0' };
const deadline = Date.now() + 1000 * 20; 


export const LandingPageView = () => {
  const [showMint, setShowMint] = useState(false);
  function onFinish() {
    setShowMint(true);
  }
  return (
    <Layout style={{ margin: 0 }}>
      <div className="landing-page-bottom-footer">
        <div className="landing-page-content">
          <Row gutter={16}>
            <Col className="landing-page-mint-row" span={6}>
              <div style={style}><Avatar size={150}
                src={<Image src="https://static.wixstatic.com/media/a70148_fb31e8e2c90c4678a53c9da5dfe049c9~mv2.png" />}
              /></div>
            </Col>
            <Col className="landing-page-mint-row" span={6}>
              <div style={style}><Avatar size={150}
                src={<Image src="https://static.wixstatic.com/media/a70148_de49edab1d874c1c8b4d2330aaa9ab03~mv2.png" />}
              /></div>
            </Col>
            <Col className="landing-page-mint-row" span={6}>
              <div style={style}><Avatar size={150}
                src={<Image src="https://static.wixstatic.com/media/a70148_7c7c6256acfd473d864f5718f2641f84~mv2.png" />}
              /></div>
            </Col>
            <Col className="landing-page-mint-row" span={6}>
              <div style={style}>
                <Avatar size={150}
                  src={<Image src="https://static.wixstatic.com/media/a70148_d53b7fd765524bf68f92c94f4c57812d~mv2.png" />}
                /></div>
            </Col>
          </Row>
          {
            !showMint && 
            <Row>
              <Col span={24} className="landing-page-mint-row">
                <div className="landing-page-countdown-container">
                <Statistic.Countdown title={"Time until mint"} value={deadline} onFinish={onFinish} />
                </div>
              </Col>
            </Row>
          }
          { showMint && 
            <Row>
              <Col span={24} className="landing-page-mint-row">
                <Button shape="round" size={"large"}> MINT </Button>
              </Col>
            </Row>
          }
        </div>
      </div>
    </Layout>
  );
};
