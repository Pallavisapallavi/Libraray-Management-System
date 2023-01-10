import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

    //title pageCount  categories thumbnailUrl longDescription authors  shortDescription

    let[title,setTitle]=useState("")
    let[pageCount,setpageCount]=useState("")
    let[categories,setcategories]=useState("")
    let[thumbnailUrl,setthumbnailUrl]=useState("")
    let[longDescription,setlongDescription]=useState("")
    let[authors,setauthors]=useState("")
    let[shortDescription,setshortDescription]=useState("")
    let navigate=useNavigate();
    let submit=(e)=>{
        e.preventDefault();
        let bookData={title,pageCount,categories,thumbnailUrl,longDescription,authors, shortDescription}
        fetch('http://localhost:8000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }

    return (
        <div className="addbook">
            <h1>ADD BOOKS</h1>
            <div className="form">
                <form action="" onSubmit={submit}>
                    <div className="title">
                        <input type="text" required placeholder="enter book title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="text" required placeholder="enter book authors" value={authors} onChange={(e)=>setauthors(e.target.value)} />


                    </div>
                    <div className="categories">
                        <input type="text" required placeholder="enter book categories" value={categories} onChange={(e)=>setcategories(e.target.value)} />
                    </div>
                    <div className="pageCount">
                        <input type="number" required placeholder="enter book pageCount" value={pageCount} onChange={(e)=>setpageCount(e.target.value)} />
                    </div>
                    <div className="shortDescription">
                        <textarea name="" id="" cols="30" rows="10" required placeholder="enter book shortDescription"  value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea name="" id="" cols="30" rows="10" required placeholder="enter book longDescription"  value={longDescription} onChange={(e)=>setlongDescription(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" required placeholder="book image" value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} />
                    </div>
                    <button>ADD BOOK</button>

                </form>
            </div>

        </div>
    );
}

export default AddBook;