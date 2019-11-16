import React from 'react';

const Header = (props) => {
    return ( 
        <div className='jumbotron jumbotron-fluid' style={styles.allHeader}>
            <div className='container' style={styles.header}>
                <h1 className='display-4'>{props.title}</h1>
                <p className='lead'>{props.text}</p>
                <p>Developed by Danis Preldzic</p>
            </div>
        </div>
     );
}

const styles = {
    header: {
        textAlign: 'center',
    },
    allHeader: {
        background: '#a85ac4',
        color: '#fff    '
    }
}
 
export default Header;