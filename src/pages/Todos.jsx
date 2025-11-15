import { useEffect, useState } from "react";
import { Badge, Form, Button, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { fetchTodos } from "../data/todo";
import { useRef } from "react";

const TodoApps = () => {
    //[fetchTodos] -> todosRaw -> [filters] -> todos -> [pagination] -> view
    //onlywaiting ->

    const [todosRaw, setTodosRaw] = useState([])
    const [todos,setTodo] = useState([])

    const [onlywaiting, SetOnlyWaiting] = useState(false)
    const [itemsPerPage, setItemPerPage] = useState(5)

    const [numPages, SetNumPages] = useState(3)
    const [curPage, setCurPage] = useState(1)

    const newIdRef = useRef()
    const newTitleRef = useRef()

    useEffect(() => {
        setTodosRaw(fetchTodos())
    }, []) //load

    useEffect(() => {
        if(onlywaiting) setTodo(todosRaw.filter( (todo) => !todo.completed ))
        else setTodo(todosRaw)
    }, [todosRaw,onlywaiting])


    useEffect(() => {
        SetNumPages( Math.ceil(todos.length / itemsPerPage))
    }, [todos,itemsPerPage])

    useEffect( () => {
        if (numPages <= 0) setCurPage(0)
            else if (curPage > numPages)setCurPage(numPages)
            else if(curPage === 0 )setCurPage(1)
    }, [numPages])
    
    const waitingClicked = (id) => {

        todosRaw.find((todo) => {
            return todo.id === id
        }).completed = true
        setTodosRaw([...todosRaw])
    }

    const deleteClicked = (id) => {setTodosRaw(todosRaw.filter((todo)=> todo.id !== id))}

    const saveClicked = (id, title) => {
        console.log(id, title)
        
        if (title.trim() !== "") {
            setTodosRaw([...todosRaw, {
                userId: 1,
                id: id,
                title: title,
                completed: false
            }])
        }

        handleClose()
    }


    //Modals
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>

            {/* Filter */}
            <div className="d-flex align-items-center justify-content-between">
                <Form.Check
                type="switch"
                id="custom-switch"
                label="show only waiting"
                onChange={(e) => {
                    SetOnlyWaiting(e.target.checked)
                }}  
                />
                <Form.Select aria-label="Default select example" className="w-25" onChange={(e)=>{setItemPerPage(e.target.value)}}>
                    <option value="5">5 itemsPerPage</option>
                    <option value="10">10 itemsPerPage</option>
                    <option value="25">25 itemsPerPage</option>

                </Form.Select>
            </div>
            {/* Table */}
            <div>
            <Table striped bordered hover>
                <thead className="table-dark">
                    <tr>
                    <th className="text-center" style={{width: "4rem"}}>ID</th>
                    <th className="text-center">TITLE</th>
                    <th className="text-end" style={{width: "12rem"}}>COMPLETED
                                    <>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        value={
                        todosRaw.reduce((prev, todo) => {
                            return Number(todo.id) > prev ? Number(todo.id) : prev;
                        }, -1) + 1
                        }
                        disabled={true}
                        ref={newIdRef}
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    as="textarea" rows={1} 
                    placeholder="Add new todo" ref={newTitleRef} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button 
                variant="primary" 
                onClick={() => saveClicked(newIdRef.current.value, newTitleRef.current.value)}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
            </>
                    </th>
                    </tr>
                </thead>
                <tbody>

                    {
                    todos.filter((todo,index)=> {
                        return index >= (curPage - 1) * itemsPerPage
                                &&
                                index <= curPage * itemsPerPage - 1
                    })
                    
                    .map((todo) => {
                        return(
                            <tr>
                                <td className="text-center">
                                <Badge bg="secondary">{todo.id}</Badge>
                                </td>
                                <td>{todo.title}</td>
                                <td className="text-end"> {todo.completed ?
                                <Badge bg="success" className="fs-5">done</Badge>
                                 :
                                <Button variant="warning" onClick={() => waitingClicked(todo.id)}>Waiting <i className="bi bi-clock"></i> </Button>
                                }
                                <Button variant="danger"><i className="bi bi-trash3" onClick={() => deleteClicked(todo.id)}></i></Button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>

            {/* Page Control */}
            <div className="text-center">
                <Button variant="outline-primary" onClick={() => setCurPage(1)} disabled={curPage === 1 ? true : false}
                    >First</Button> &nbsp;
                <Button variant="outline-primary" onClick={() => curPage > 1 && setCurPage((p) => p - 1)} disabled={curPage === 1 ? true : false}>Previous</Button>
                <span>&nbsp; {curPage} / {numPages} &nbsp;</span> &nbsp;
               
                <Button variant="outline-primary" onClick={() => {
                    if (curPage < numPages) {
                        setCurPage((p) => p + 1)
                    }
                }}disabled={curPage === numPages ? true : false}>Next</Button> &nbsp;

                <Button variant="outline-primary" 
                onClick={() => setCurPage(numPages)} disabled={curPage === numPages ? true : false}>Last</Button> &nbsp;
            </div>
        </>
    );
}
 
export default TodoApps;