import React,{useState,useEffect} from 'react';
import './ArticleList.css'
import { List ,Row ,Col , Modal ,message ,Button,Switch} from 'antd';
import axios from 'axios'
import  servicePath from '../../utils/apiUrl';
import {log} from "util";
const { confirm } = Modal;

const ArticleList = props => {

  const [list,setList]=useState([]);

  useEffect(() => {
    getList();
  }, []);

  // 得到文章列表
  const getList = ()=>{
    axios({
      url: servicePath.getArticleList,
      withCredentials: true,
    }).then(res => setList(res.data.list))
  };

  const handleDel = id => {
    axios({
      method: 'delete',
      url: servicePath.delArticle,
      withCredentials: true,
      data: { id },
    }).then((res: any) => {
      if (res.data.isSuccess) {
        message.success('删除成功');
        getList();
      } else {
        message.error('删除失败')
      }
    }).catch(error => console.log(error))
  };

  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>标题</b>
            </Col>
            <Col span={3}>
              <b>类别</b>
            </Col>
            <Col span={3}>
              <b>发布时间</b>
            </Col>
            <Col span={3}>
              <b>集数</b>
            </Col>
            <Col span={3}>
              <b>浏览量</b>
            </Col>

            <Col span={4}>
              <b>操作</b>
            </Col>
          </Row>
        }
        bordered
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            <Row className="list-div" style={{ width: "100%" }}>
              <Col span={8}>
                {item.title}
              </Col>
              <Col span={3}>
                {item.typeName}
              </Col>
              <Col span={3}>
                {item.createTime}
              </Col>
              <Col span={3}>
                共<span>{item.part_count}</span>集
              </Col>
              <Col span={3}>
                {item.view_count}
              </Col>

              <Col span={4}>
                <Button type="primary" onClick={() => props.history.push('/admin/add/'+item.id)}>修改</Button>&nbsp;

                <Button onClick={() => handleDel(item.id)}>删除 </Button>
              </Col>
            </Row>

          </List.Item>
        )}
      />

    </div>
  )
};

export default ArticleList
