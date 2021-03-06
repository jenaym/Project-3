import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from './store/actions/authActions';
import Grey from '@material-ui/core/colors/grey'
// import Background from './images/canon.jpeg'

// shadowGrey = grey[900]

const nateStyles = {
    title: {
        fontFamily: `Iceberg`,
        color: '#fff',
        fontSize: '3.00rem',
        textShadow: '0 0 5px #84FFFF, 0 0 10px #84FFFF, 0 0 15px #84FFFF, 0 0 20px #03A9F4, 0 0 30px #03A9F4, 0 0 40px #03A9F4, 0 0 50px #03A9F4, 0 0 75px #03A9F4',
        paddingTop: '20px',
        letterSpacing: '.06em'
        // backgroundImage: `url(${Background})`
    }

}

const NavbarComponent = (props) => {
    function onLogoutClick(e) {
        e.preventDefault();
        props.logoutUser();
    }
    const { isAuthenticated, user } = props.auth;
    const authLinks = (
        <Grid item xs align='right'>
            <Button
                color="inherit"
                href="/login"
                onClick={onLogoutClick}>
                Sign Out
                <img
                    className="rounded-circle ml-1"
                    src={user.avatar} alt={user.name}
                    style={{ width: '25px', marginRight: '3px' }}
                    title="You need to have a Gravatar connected to your email to display an image" />
            </Button>
        </Grid>

    );
    const guestLinks = (
        <Grid item xs align='right'>
            <Button color="inherit" href="/login">
                Sign In
            </Button>
        </Grid>

    );

    return (
        <AppBar position="static">

            <Toolbar>

                <Grid container>

                    <Grid item xs align='center'>

                        <Typography
                            variant="title"
                            color="inherit"
                            className='Typography'
                            style={nateStyles.title}
                            id="mainTitle"
                        >
                            LIQUID ASSETS
                        </Typography>

                    </Grid>
                </Grid>

            </Toolbar>

            <Grid item xs align='right'>
                {isAuthenticated ? authLinks : guestLinks}
            </Grid>
        </AppBar>
    )
};

NavbarComponent.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(NavbarComponent);