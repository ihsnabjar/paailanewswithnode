import React, {useState,useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ChildrenMedia.css';



import {useStateValue} from '../../StateProvider';
import * as api from '../../api/index';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




  export default function BasicTable({mediaId, setCategoryId}) {


  // console.log('the media id', mediaId)
  const classes = useStyles();
  const [{media}, dispatch] = useStateValue();
  const [mediaList, setmedia] = useState([]);
 
  
  useEffect(() =>  {
    async function getData(){
    const data = await api.fetchOneData(mediaId);
    // console.log('fetching ', data)
    setmedia(data.data.category)
    return data;
    }
    getData();
  }, [mediaList, mediaId]);

  // function onUpdate(onemediaData)  {
  //     console.log('updahshd', onemediaData)
  //     history.push('/update/'+onemediaData)
  // };
  const onRemove = (id) =>  async() =>{
    await await api.deleteCategoryMedia(id)
    dispatch({
      type:'DEL_MEDIA',
      id: id,
    });
  };
    const rows = !mediaList.length ? 'loading...' : mediaList.map(onemedia => (
      <TableRow key={onemedia._id}>
              <TableCell component="th" scope="row">{onemedia.title}</TableCell>
              <TableCell align="center" ><a href={onemedia.news_url}> {onemedia.news_url} </a> </TableCell>
              <TableCell align="right" >
                <div className="action__button">
                  <button onClick={() => setCategoryId(onemedia._id)}>update</button>
                  <button onClick={onRemove(onemedia._id)} >delete</button>
                </div>
              </TableCell>
       </TableRow>
    )) 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            {/* <TableCell align="center">Image</TableCell> */}
            {/* <TableCell align="center">Nat/Reg</TableCell> */}
            <TableCell align="center">NEWS_URL</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}

