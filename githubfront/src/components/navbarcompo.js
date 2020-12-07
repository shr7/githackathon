import React,{useState} from 'react';
import { Nav, Navbar, NavbarBrand , NavbarToggler, Collapse, UncontrolledDropdown,DropdownToggle} from 'reactstrap';
import '../App.css';
const Navbarcompo = () => {
    const [isOpen,setisopen] = useState(false);
    const Toggle = () => setisopen(!isOpen);



    return (
        <div className='container mt-5 secondary'>
            <div className='row'>
                <div className='col-md-12'>
                <Navbar color='light' light expand='md'>
                    <NavbarBrand>
                        <span className='fa fa-exclamation-circle mr-3'> 528 Open</span>
                        <span className='fa fa-check'> 5784 Closed</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={Toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='ml-auto'  navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Author
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Label
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Project
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Milestones
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Assignee
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Sort
                            </DropdownToggle>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </div>
        </div>
    );
}

export default Navbarcompo;