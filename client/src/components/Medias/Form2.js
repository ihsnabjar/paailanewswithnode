import React, {useState, useEffect} from 'react';
import './Form2.css';
import * as api from '../../api/index.js';
import {useStateValue} from '../../StateProvider';


function Form2({currentId, setCurrentId}) {

  const [{media}, dispatch] = useStateValue();
  const [postData, setPostData] = useState({  name: '', image_url: '' , type: '' });
  
  const clear = () => {
    setCurrentId (0);
    setPostData({name:'', image_url: '' , type: '' });
  };
 
  useEffect(() =>  {
    if(currentId) {
    async function getOneData(){
    const data = await api.fetchOneData(currentId);
    // console.log('this one dtaa' , data)
    setPostData(data.data)
    return data;
    }
    getOneData();
  }
  }, [currentId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
        await api.createPost(postData);
      
        dispatch({
            type : 'ADD_MEDIA',
            media: postData,
        })
        clear();
     
    } else {
        await api.updateMedia(currentId, postData)
      clear();
    }
  };

    return (
        <div  className='Adding__container'>
            <h3>Add Media</h3>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="form__container">
                    <input type="text" placeholder='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                    {/* <input type="text"  placeholder='Site-Url' value={postData.siteUrl} onChange={(e) => setPostData({ ...postData, siteUrl: e.target.value })} /> */}
                    <input type="text"  placeholder='Image-Url' value={postData.image_url} onChange={(e) => setPostData({ ...postData, image_url: e.target.value })} />
                </div>
                 <p>Please select Type: </p>
                 <label htmlFor="National">National</label>
                 <input type="radio" name="type"  id="National" value={postData.type} onChange={(e) => setPostData({ ...postData, type: 'National' })} />
                <label htmlFor="Regional">Regional</label>
                 <input type="radio" name="type"  id="Regional" value={postData.type} onChange={(e) => setPostData({ ...postData, type: 'Regional' })} />
                <button type="submit" className="Adding__button">Submit</button>
            </form>
        </div>
    )
}

export default Form2
