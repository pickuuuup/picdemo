import React, { useState } from 'react';
import './index.css';
import { Checkbox, Card }  from 'antd';
import './App.css';

const CheckboxGroup = Checkbox.Group;
const { Meta } = Card;

const Page = () => {

  const [value, setValue] = useState(['1']);

  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  
  ]; // 同上面的数据
  console.log('valuetest',value); // 输出用户选择图片 id
  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};

function PictureSelect(data){ 
          const [checkAll, setCheckAlle] = useState(false);
          let { pictures, value, onChange } = data;
  
          const onCheckAllChange = (e) =>{
            const checkListId = pictures.map((pic)=>pic.id);
            e.target.checked === false ? onChange(()=>[]) : onChange(()=>checkListId);
            setCheckAlle(()=>e.target.checked === true ? true : false);
          }

          return (            
            <div className="PictureSelect"> 
                <Checkbox
                    indeterminate={ value.length === pictures.length ? true : false }
                    onChange={onCheckAllChange}
                    checked={ checkAll }
                  >
                    已选中{value.length}个文件
                </Checkbox>
                <CheckboxGroup value={value} onChange={onChange} >  
                  <div className="myCard" id="myCard">  
                    {pictures.map((item)=>{
                      return (
                        <Card.Grid key={item.id} className="flex-item">
                          <Checkbox value={item.id} style={{position : 'absolute'}} />
                          <img src={item.url} />
                          <Meta title={item.name}/>
                        </Card.Grid>
                      )
                    })}  
                  </div> 
                </CheckboxGroup>
            </div>        
            );    
        }
        export default Page;

