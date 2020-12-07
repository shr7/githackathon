// #Required imports 
import React, { useState } from 'react';
import {
    Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupText,
    Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Alert
} from 'reactstrap';
import gitapi from '../issueapi';

const Header = ({ open, closed, all, changeopen, changeclosed, changeall }) => {

    // using state to toggle filter menu
    const [filterOpen, setfilterOpen] = useState(false);
    const [modal, setmodal] = useState(false);
    const [title, settitle] = useState('');
    const [username, setusername] = useState('');
    const [alert_msg, setalert_msg] = useState('');
    const [visible, setvisible] = useState(false)
    const toggelmodal = () => setmodal(!modal);
    const toggle = () => setfilterOpen(!filterOpen)



    // Custom dropdown filter menu to filter open and closed issues
    const Filter = () => {
        return (
            <ButtonDropdown isOpen={filterOpen} toggle={toggle}>
                <DropdownToggle caret color="success">
                    Filter
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Filter</DropdownItem>
                    <DropdownItem onClick={() => {
                        if (!all) {
                            changeall();
                            if (open)
                                changeopen();
                            else if (closed)
                                changeclosed();
                        }
                    }}  >All Issues</DropdownItem>
                    <DropdownItem onClick={() => {
                        if (!open) {

                            changeopen();
                            if (all)
                                changeall();
                            else if (closed)
                                changeclosed();
                        }
                    }}>Open Issues</DropdownItem>
                    <DropdownItem onClick={() => {
                        if (!closed) {

                            changeclosed();
                            if (all)
                                changeall();
                            if (open)
                                changeopen();

                        }
                    }}>Closed Issues</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }

    const Submitissue = async () => {
        await gitapi.post('/add-issue', {
            username: username,
            title: title
        }).then((res) => {
            console.log(res);
            if(res.data==='Something went wrong')
                setalert_msg('Error');
            else
                setalert_msg('Success')
            setvisible(true);
        })
            .catch(err => {
                console.log(err);
                setalert_msg('Error');
                setvisible(true);
            });
    }


    return (
        <div className='container'>
            <div className='col-md-12'>
                <div className='row mt-4 ml-3'>
                    <Filter />
                    <div className='col-md-6 ml-3'>
                        <div className='row'>
                            <InputGroup>
                                <InputGroupAddon addonType='prepend'>
                                    <InputGroupText>
                                        <i className='fa fa-search'></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder='Search' />
                            </InputGroup>
                        </div>
                    </div>
                    <Button className='ml-5 mr-1' outline color='secondary'>
                        <span className='fa fa-tag '> Labels</span>
                    </Button>
                    <Button className='mr-4' outline color='secondary'>
                        <span className='fa fa-flag-o'> Milestones</span>
                    </Button>
                    <Button color='success ml-5' onClick={toggelmodal}>New issue</Button>
                    <Modal isOpen={modal} toggle={toggelmodal}>
                        <ModalHeader toggle={toggelmodal}>Provide your valueable contribution</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for='Username'>
                                        Username
                                    </Label>
                                    <Input type='text' name='Username' id='username' placeholder='@username' value={username} onChange={e => setusername(e.target.value)}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='Title'>
                                        TItle of the issue
                                    </Label>
                                    <Input type='text' name='Title' id='title' placeholder='Report your issue...' value={title} onChange={e => settitle(e.target.value)} ></Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" type='submit' value='submit' onClick={() => {
                                Submitissue();
                                toggelmodal();

                            }}>Submit</Button>{' '}
                            <Button color="danger" onClick={toggelmodal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <div className='row mt-4'>
                        {alert_msg === 'Success' ? <Alert color="success" isOpen={visible} toggle={() => setvisible(!visible)}>Successfully registered</Alert> : null}
                        {alert_msg === 'Error' ? <Alert color="danger" isOpen={visible} toggle={() => setvisible(!visible)}>Something went wrong</Alert> : null}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Header;

