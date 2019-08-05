import React from "react";
import "./App.css";
import { Row, Col, ListGroup, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ReduxCounter from './view/ReactCounter'
import ReactReduxCounter from './view/ReactReduxCounter'
import AxiosEncapsulate from './view/AxiosEncapsulate'
function App() {
  return (
    <div className="App">
      <Tab.Container defaultActiveKey="#axiosencapsulate">
        <Row style={{ height: "100vh", margin: "30px" }}>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#reduxcounter">
                redux计数器
              </ListGroup.Item>
              <ListGroup.Item action href="#reactreduxcounter">
                react-redux计数器
              </ListGroup.Item>
              <ListGroup.Item action href="#axiosencapsulate">
                Axios封装
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content style={{textAlign:'left'}}>
              <Tab.Pane eventKey="#reduxcounter">
                <ReduxCounter/>
              </Tab.Pane>
              <Tab.Pane eventKey="#reactreduxcounter">
                <ReactReduxCounter/>
              </Tab.Pane>
              <Tab.Pane eventKey="#axiosencapsulate">
                <AxiosEncapsulate/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
