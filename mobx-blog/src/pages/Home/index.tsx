import React, {useEffect, useState} from 'react';
import marked from 'marked';
import axios from 'axios';
import { Row, Col ,Input, Select ,Button ,DatePicker, message } from 'antd'
import servicePath from "../../utils/apiUrl";

import './home.css'


const { Option } = Select;
const { TextArea } = Input;

interface typeInfoInterface {
  id: any;
  typeName: any;
}


const Home = props => {

  const [articleId,setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('');  //文章标题
  const [articleContent , setArticleContent] = useState(''); //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容'); // html内容
  const [introducemd,setIntroducemd] = useState(); // 简介的markdown内容
  const [introducehtml,setIntroducehtml] = useState('等待编辑'); // 简介的html内容
  const [showDate,setShowDate] = useState(); // 发布日期
  const [updateDate,setUpdateDate] = useState(); // 修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType,setSelectType] = useState(1); //选择的文章类别

  //从中台得到文章类别信息
  const getTypeInfo = () => axios({
    url: servicePath.getTypeInfo,
    // header: { 'Access-Control-Allow-Origin':'*' },
    withCredentials: true
  }).then(
    res=>{
      if(res.data.isSuccess){
        setTypeInfo(res.data.data)
      }else{
        localStorage.removeItem('openId');
        props.history.push('/')
      }
    }
  );

  // 获取文章详情
  const getArticleById = id => axios({
    url: servicePath.getArticleById + '/' + id,
    withCredentials: true
  }).then(res => {
    setArticleTitle(res.data.data[0].title);
    setArticleContent(res.data.data[0].article_content);
    let html=marked(res.data.data[0].article_content);
    setMarkdownContent(html);
    setIntroducemd(res.data.data[0].introduce);
    let tmpInt = marked(res.data.data[0].introduce);
    setIntroducehtml(tmpInt);
    setShowDate(res.data.data[0].createTime);
    setSelectType(res.data.data[0].typeId);
  });

  useEffect(() => {
    const tagId = Number(props.match.params.id);
    if (Boolean(tagId)) {
      getTypeInfo();
      setArticleId(tagId);
      getArticleById(tagId);
    }
  }, []);
  
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  });

  const changeContent = (e)=>{
    setArticleContent(e.target.value);
    setMarkdownContent(marked(e.target.value));
  };

  const changeIntroduce = (e)=>{
    setIntroducemd(e.target.value);
    let html=marked(e.target.value);
    setIntroducehtml(html)
  };


  //保存文章的方法
  const saveArticle = ()=>{

    // markedContent()  //先进行转换


    if(!selectedType){
      message.error('必须选择文章类别');
      return false
    }else if(!articleTitle){
      message.error('文章名称不能为空');
      return false
    }else if(!articleContent){
      message.error('文章内容不能为空');
      return false
    }else if(!introducemd){
      message.error('简介不能为空');
      return false
    }else if(!showDate){
      message.error('发布日期不能为空');
      return false
    }

    let dataProps: any = {};  //传递到接口的参数
    dataProps.type_id = selectedType;
    dataProps.title = articleTitle;
    dataProps.article_content = articleContent;
    dataProps.introduce = introducemd;
    let datetext= showDate.replace('-','/'); // 把字符串转换成时间戳
    dataProps.createTime = +new Date(datetext);


    if(articleId === 0){
      dataProps.previewNum =Math.ceil(Math.random()*100)+1000;
      console.log(dataProps);
      axios({
        method:'post',
        url:servicePath.addArticle,
        data:dataProps,
        withCredentials: true
      }).then(
        res=>{
          setArticleId(res.data.insertId);
          if(res.data.isSuccess){
            message.success('文章保存成功')
          }else{
            message.error('文章保存失败');
          }
        }
      )
    } else {
      dataProps.id = articleId;
      axios({
        method:'post',
        url:servicePath.updateArticle,
        data:dataProps,
        withCredentials: true
      }).then(
        res=>{
          if(res.data.isScuccess){
            message.success('修改成功')
          }else{
            message.error('修改失败');
          }
        }
      )
    }
  };

  return (
    <div>
      <Row gutter={12}>

        <Col span={18}>
          <Row gutter={10} >
            <Col span={20}>
              <Input
                placeholder="博客标题"
                size="large"
                value={articleTitle}
                onChange={e=>{ setArticleTitle(e.target.value) }}
              />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select defaultValue={selectedType} size="large" onChange={val => setSelectType(val)}>
                {
                  typeInfo.map((item: typeInfoInterface) => {
                    return (<Option key={item.id} value={item.id}> {item.typeName} </Option>)
                  })
                }
              </Select>
            </Col>
          </Row>
          <br/>
          <Row gutter={10} >
            <Col span={12}>
              <TextArea
                value={articleContent}
                className="markdown-content"
                rows={35}
                onChange={changeContent}
                onPressEnter={changeContent}
                placeholder="文章内容"
              />
            </Col>
            <Col span={12}>
              <div className="show-html" dangerouslySetInnerHTML = {{__html:markdownContent}} />
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button  size="large">暂存文章</Button>&nbsp;
              <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
              <br/>
            </Col>
            <Col span={24}>
              <br/>
              <TextArea
                rows={4}
                value={introducemd}
                onChange={changeIntroduce}
                onPressEnter={changeIntroduce}
                placeholder="文章简介"
              />
              <div
                className="introduce-html"
                dangerouslySetInnerHTML = {{ __html:'文章简介：' + introducehtml }} >
              </div>
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  onChange={(date,dateString)=>setShowDate(dateString)}
                  placeholder="发布日期"
                  size="large"
                />
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  )
};

export default Home;
