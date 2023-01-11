import { useState, useEffect } from "react";
import '../styles/bookList.css'


import { useNavigate ,useLocation } from "react-router-dom";


const BookList = () => {
    let navigate = useNavigate()
    let [book, setBook] = useState([])
    let location=useLocation();
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:8000/books')
            let data = await response.json()
            setBook(data)

        }
        fetchData()
    }, [])
    //   let remove=(id,title)=>{
    //     setBook(book.filter(x=>x.id!==id))
    //     alert(`${title} has been removed`)

    //   }

    let remove = (id, title) => {
        fetch(`http://localhost:8000/books/${id}`, {
            method: 'DELETE'

        },)
        alert(`${title} will be deleted permanently`)   //deleting book from server permanently
    }
    let read = (id) => {
        if(location.pathname == '/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
        }else{
            navigate(`/user/book-list/${id}`)
        }

    }


    return (
        <div className="booklist">
            <h1>AVAILABLE BOOKS:{book.length}</h1>
            <div className="books_section">
                {
                    book.map(data => (
                        <div className="book_card">
                            <div className="booklist2">
                                <div className="bookimg">
                                    <img src={data.thumbnailUrl} alt="img" />
                                </div>
                                <div className="bookinfo">
                                    <h4>Title:{data.title}</h4>
                                    <h6>Authors:{data.authors.toString()}</h6>
                                    <h6>Page count:{data.pageCount}</h6>
                                    <h6>Categories:{data.categories}</h6>
                                    <button style={{ marginRight: 10 }} onClick={() => read(data.id)}>READ MORE</button>
                             
                                    { location.pathname == '/admin/book-list' &&        <button onClick={() => remove(data.id, data.title)}>Delete</button>}

                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>
        </div>
    );
}

export default BookList;