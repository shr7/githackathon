import React from 'react';
import '../App.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const Bottomlinks = () => {
    return (
        <div className='container mt-4 offset-4'>
            <div className='row'>
                <div className=' col-md-12'>

                    <Pagination>
                    <PaginationItem >
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink previous href="#">Previous</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="#">
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled>
                            <PaginationLink href='#'>
                                ...
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href='#'>
                                21
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href='#'>
                                22
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" >Next</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                        </Pagination>

                </div>
            </div>
        </div>
    );
}

export default Bottomlinks;