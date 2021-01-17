import React, {useState, useEffect} from 'react';
import './ChildrenForm.css';
import * as api from '../../api/index.js';
import {useStateValue} from '../../StateProvider';
import {Link } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';



function Form2({mediaId, categoryId, setCategoryId, }) {

  console.log('this one from children form', mediaId)

  const [{media}, dispatch] = useStateValue();
  const [postData, setPostData] = useState({  title: '', news_url: ''  });
  
  const clear = () => {
    setCategoryId (0);
    setPostData({ title: '', news_url: ''});
  };
 
  useEffect(() =>  {
    if(categoryId) {
    async function getOneCategoryData(){
    const data = await api.fetchCategoryData(categoryId);
    console.log('this one dtaa' , data)
    setPostData(data.data)
    return data;
    }
    getOneCategoryData();
  }
  }, [categoryId]);


  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (categoryId === 0) {
        await api.createCategoryPost(mediaId, postData);
        dispatch({
            type : 'ADD_MEDIA',
            media: postData,
        })
        clear();
     
    } else {
        await api.updatCategoryeMedia(categoryId, postData)
      clear();
    }
  };

    return (
        <div  className='Adding__container'>
            <div className="Adding__title">
                <h3>Add Category To </h3>
                <Link   to="/dashboard/media"> <div  className="backSpaceIcon"><BackspaceIcon/>  </div>  </Link>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="formC__container">
                    <input type="text" placeholder='Category eg.(sports..)' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <input type="text"  placeholder='Http-Url' value={postData.news_url} onChange={(e) => setPostData({ ...postData, news_url: e.target.value })} />
                    {/* <input type="text"  placeholder='Image-Url' value={postData.imageUrl} onChange={(e) => setPostData({ ...postData, imageUrl: e.target.value })} /> */}
                </div>
                 {/* <p>Please select Type: </p>
                 <label htmlFor="National">National</label>
                 <input type="radio" name="type"  id="National" value={postData.type} onChange={(e) => setPostData({ ...postData, type: 'National' })} />
                <label htmlFor="Regional">Regional</label>
                 <input type="radio" name="type"  id="Regional" value={postData.type} onChange={(e) => setPostData({ ...postData, type: 'Regional' })} /> */}
                <button type="submit" className="Adding__button">Submit</button>
            </form>
        </div>
    )
}

export default Form2
