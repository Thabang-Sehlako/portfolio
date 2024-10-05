import React, { useEffect, useRef ,useState  } from 'react'
import './Data.css'

const Data = () => {


    const [formData,setFormData] = useState({
                                                name:'',
                                                gender:'',
                                                age: ''
        
                                            })

    const [data,setData] = useState([])

    const [ediTid,setEditId] = useState(false)
    const outSideClick = useRef(false)
    const [searchTerm,setSearchTerm] = useState('')
   
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const lastItem = currentPage *  itemsPerPage
    const indexOfFirstItem = lastItem - itemsPerPage

    let filteredItems = data.filter((item) => String(item.name).toLowerCase().includes(searchTerm.toLowerCase()))
    const filteredData = filteredItems.slice(indexOfFirstItem,lastItem)


    useEffect(() =>{
        if(!ediTid) return

        let selectedItem  =document.querySelectorAll(`[id ='${ediTid}']`)

        selectedItem[0].focus()

    },[ediTid])

    useEffect(()=>{
        
        const handleOutsideClick = (e) =>{
            if(outSideClick.current && !outSideClick.current.contains(e.target)){
               setEditId(false)
            }

            return () => document.removeEventListener('click',handleOutsideClick)

        }
            

        document.addEventListener('click',handleOutsideClick)
    },[])

    useEffect(()=>{
        setCurrentPage(1)
    },[searchTerm])
    

    const handleInputChange = (e)=>{
        setFormData(f => ({...f,[e.target.name]:[e.target.value]}))
    }

    const handleAddClick = () =>{
       if(formData.name && formData.gender && formData.age){



              const newItem = {
                    id: Date.now(),
                    name: formData.name,
                    gender:formData.gender,
                    age:formData.age
                }
                setData(d => ([...d,newItem]))
                setFormData({
        
                                name:'',
                                gender:'',
                                age:''
                    
                            })
       }

       else if(formData.name === '' || formData.gender === '' || formData.age === ''){
            alert('Please fill all the input fields')
       }

        
    } 

    const handleDelete = (id)=>{
        const updatedList = data.filter((item) => item.id !== id)

       // setData(d => ([...d,updatedList]))
       setData(updatedList)

       if(filteredData.length === 1 && currentPage !==1){
        setCurrentPage(p => p - 1)
       }


    }

    const handleEdit = (id,updatedData) =>{
        if(!ediTid || ediTid !== id){
            return
        }
        const updatedList = data.map((item) =>item.id === id ? {...item,...updatedData} : item)

        setData(updatedList)
    }

    const handleSearch =(e)=>{
        setSearchTerm(e.target.value)
    }

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }




  return (
    <div className='Container'>
        <div className="add-container">

            <div className="info-container">

                <input type="text"  name='name' placeholder='Name'    onChange={handleInputChange}  value={formData.name}/>
                <input type="text"  name='gender' placeholder='Gender'  onChange={handleInputChange} value={formData.gender}/>
                <input type="text"  name='age' placeholder='Age'   onChange={handleInputChange} value={formData.age}/>

            </div>

            <button className='add' onClick={handleAddClick}>Add</button>

        </div>

        <div className="search-table-container">

            <input type="text" onChange={handleSearch} placeholder='Search by name' className='search-input'/>



            <table ref={outSideClick}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item) =>(
                        
                            <tr key={item.id}>

                                <td id= {item.id}  contentEditable = {ediTid === item.id} onBlur={(e)=>handleEdit(item.id,{name:e.target.innerText})}>{item.name}</td>
                                <td id= {item.id}  contentEditable = {ediTid === item.id} onBlur={(e)=>handleEdit(item.id,{gender:e.target.innerText})}>{item.gender}</td>
                                <td id= {item.id}  contentEditable = {ediTid === item.id} onBlur={(e)=>handleEdit(item.id,{age:e.target.innerText})}>{item.age}</td>
                                <td><button onClick={()=>setEditId(item.id)} className='edit'>Edit</button> <button className='delete' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                           
                            </tr>
                            
                        ))
                    }
    
                </tbody>
                
            </table> 

            

            <div className="paginition">
                {Array.from({length: Math.ceil(filteredItems.length/itemsPerPage)},(_,index)=>(
                    <button key={index + 1} onClick={()=>paginate(index + 1)} style={{backgroundColor:currentPage === index + 1 &&  '#04aa6d'}}>{index + 1}</button>
                ))}
            </div>


        </div>
      
    </div>
  )
}

export default Data

