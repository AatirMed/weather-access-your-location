import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {nanoid} from 'nanoid';
import './Show.css'

const Show =()=>{
    const store = useSelector(state=>state.arr)
    const dispatch = useDispatch()

    //remove
    const del =(id)=> {
        store.splice(store.map(item => item.id).indexOf(id),1)
        dispatch({type:'del', val:store})
    }

    const edit=(id)=>{
       dispatch({type:'edit_id',val:id})
       dispatch({type:'monter',val:{monter:'true',btn:'edit'}})
       dispatch({type:'disable',val:true})
    }

    return(
    <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>ville</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {store.map(
            ele=>{
                return(
                    <tr key={nanoid()}>
                        <td>{ele.name}</td>
                        <td>{ele.ville}</td>
                        <td>
                            <button className="styleRemove" onClick={()=>del(ele.id)}>Remove</button>
                            <button className="styleEdit" onClick={()=>edit(ele.id)}>Edit</button>
                        </td>
                    </tr>
                )
            }
        )}
            </tbody>
        </table>
        
    </React.Fragment>
)
}

export default Show