import React from 'react'
import './List.css'
import Pagination from 'react-bootstrap/Pagination';
import { DropdownButton } from 'react-bootstrap';

function List({ data }) {
    return (
        <div className='list shadow mt-3 mb-5'>
            <div className='d-flex justify-content-between p-3'>
                <div>
                    <h2> ALL customers</h2>
                    <span style={{ color: "green" }}>  Active members</span>
                </div>
                <div className='d-flex mt-3'>
                    <div className=' mx-2'>

                    <input type="text" placeholder='search' className='form-control' />
                    </div>
                    <DropdownButton
                        variant="outline-secondary"
                        title="sort by :newest"
                        id="input-group-dropdown-1">
                    </DropdownButton>
                </div>
            </div>
            <div>
                <table className='table  '>
                    <thead className=' thead-grey'>
                        <tr>
                            <th>Customer Name</th>
                            <th>company Name</th>
                            <th>phone number</th>
                            <th>email</th>
                            <th>country</th>
                            <th>status </th>
                        </tr>
                    </thead>
                    <tbody className='tbody-color'>
                        {data.length > 0 ?
                            data.slice(0, 5).map(item => (

                                <tr>
                                    <td> {item.name.firstname}</td>
                                    <td> {item.username}</td>
                                    <td> {item.phone}</td>
                                    <td> {item.email}</td>
                                    <td> {item.password}</td>
                                    <td> <button className='btn btn-outline-success'>Active</button></td>
                                </tr>
                            )) :
                            <div>no data</div>
                        }
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-between mx-5'>
                <div> showing data 2 of 10 pages  </div>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}

export default List