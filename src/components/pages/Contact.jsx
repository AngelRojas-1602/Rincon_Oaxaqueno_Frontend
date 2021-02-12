import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4),
    },
    images: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap',
    },
    imageWrapper: {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '40vh',
      [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
      },
      '&:hover': {
        zIndex: 1,
      },
      '&:hover $imageBackdrop': {
        opacity: 0.15,
      },
      '&:hover $imageMarked': {
        opacity: 0,
      },
      '&:hover $imageTitle': {
        border: '4px solid currentColor',
      },
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  });

function Contact(props) {
    const { classes } = props;

    const images = [
        {
            link: 'https://www.facebook.com/rincon.oaxaqueno.16/',
            url: 'https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png',
            title: 'Facebook',
            height: '275px'
        },
        {
            link: 'https://www.instagram.com/rincon.oaxaqueno.02/',
            url: 'https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-icono-de-instagram-logo-by-vexels.png',
            title: 'Instagram',
            height: '275px'
        },
        {
            link: 'https://www.youtube.com/channel/UC5vkn2t97IXChwzde8SIJSA?view_as=subscriber',
            url: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
            title: 'You tube',
            height: '275px'
        },
    ];

    return (
        <Container className={classes.root}>
            <Typography variant="h4" marked="center" align="center" component="h2">
                Paginas de Contacto
            </Typography>
            <div className={classes.images}>
                {images.map((image) => (
                    <ButtonBase
                        key={image.title}
                        component={ 'a' }
                        href={image.link}
                        className={classes.imageWrapper}
                        style={{
                            height: image.height,
                          }}
                        >
                        <span
                            className={classes.imageSrc}
                            style={{
                            backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                            component="h3"
                            variant="h6"
                            color="inherit"
                            className={classes.imageTitle}
                            >
                            {image.title}
                            <div className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
