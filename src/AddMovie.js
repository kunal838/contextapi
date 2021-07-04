import React,{useState,useContext} from 'react'
import {moviecontext} from './DataContext'
import {Button} from '@material-ui/core'
import './AddMovie.css'

const AddMovie = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [movies,setMovies] = useContext(moviecontext)

    const updateName  = (e) => {
        setName(e.target.value)
      }

      const updatePrice  = (e) => {
        setPrice(e.target.value)
      }
      const add = (e) =>{
          e.preventDefault()
          setMovies(m =>[...m,{name,price}])
      }

    return (
        
       <div className="inputs" >
           <input type="text" placeholder="name"  value={name} onChange={updateName}/>
           <input type="text" placeholder="price" value={price} onChange={updatePrice}/>
           <Button onClick={add} >add</Button>
       </div>
    )
}

export default AddMovie
