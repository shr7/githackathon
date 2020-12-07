import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import gitapi from '../issueapi';

const Homecompo = ({ open, closed, all }) => {
    const [result, setresult] = useState([]);
    const [showOpen, setshowOpen] = useState([]);
    const [showclosed, setshowClosed] = useState([]);

    const fetchData = () => {
        return gitapi.get('/list-issues')
            .then((result) => {
                //console.log(result.data);
                setresult(result.data);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchData();
       const openarray = filteropen(1);
       const closearray = filterclosed(0);
       setshowOpen(openarray);
       setshowClosed(closearray);

    }, [all]);

    const filteropen = (isopen) => {
       return(result || []).filter((item) => {
           return(item.open===isopen)
       })
    }

    const filterclosed = (isopen) => {
        return(result || []).filter((item) => {
            return(item.open===isopen)
        })
     }



    const Display = ({ item }) => {
        return (
            <ListGroup>
                <ListGroupItem>
                    <div className='row'>
                        <span className='fa fa-exclamation-circle mr-3 ml-1 fa-lg ' style={{color:'lightgreen'}} ></span>
                        <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
        <span className='fa fa-comment-o ml-auto'> {item.comments}</span>
                    </div>
                    <div className='row ml-4'>
                        <ListGroupItemText>#{item.id} opened {item.lastopened} days ago by {item.lastuser}</ListGroupItemText>
                    </div>
                </ListGroupItem>
            </ListGroup>
        );
    }

    const list = result.map((item) => {
        return (
            <div key={item.id} className='col-md-12'>
                <Display item={item} />
            </div>
        );
    });
    const openlist = showOpen.map((item) => {
        return (
            <div key={item.id} className='col-md-12'>
                <Display item={item} />
            </div>
        );
    });

    const closelist = showclosed.map((item) => {
        return (
            <div key={item.id} className='col-md-12'>
                <Display item={item} />
            </div>
        );
    });



    if (all) {
        return (
            <div className='container'>
                {list}
            </div>
        )
    }
    else if (open) {
        return (
            <div className='container'>
                {openlist}
            </div>
        );
    }
    else if (closed) {
        return (
            <div className='container'>
                {closelist}
            </div>
        )
    }



    return (

        <div>
            {list}
        </div>

    );
}

export default Homecompo