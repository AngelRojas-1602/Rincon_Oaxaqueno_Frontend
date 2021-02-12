import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './Typography';


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

function ProductosContainer(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://dl.dropboxusercontent.com/s/u68hl9dfh3s9t6t/Clasico1Kg.png?dl=0',
      title: 'Mayordomo',
      width: '40%',
      height: '200px',
      link: '/productos'
    },
    {
      url:
        'https://dl.dropboxusercontent.com/s/xand5k3md3h6p6c/Mezcalitos.png?dl=0',
      title: 'Mezcal & Cremas',
      width: '20%',
      height: '200px',
      link: '/productos'
    },
    {
      url:
        'https://dl.dropboxusercontent.com/s/a5gdgx8toqlncxf/RojoFrasco.png?dl=0',
      title: 'Salsas',
      width: '40%',
      height: '200px',
      link: '/productos'
    },

    {
      url:
        'https://dl.dropboxusercontent.com/s/taktf21fnykxju4/Semiamargo1Kg.png?dl=0',
      title: 'Artesanias',
      width: '55%',
      height: '200px',
      link: '/productos'
    },
    {
      url:
        'https://dl.dropboxusercontent.com/s/fk395mnwdm71nbd/ChocomioPromo.png?dl=0',
      title: 'Gastronomia',
      width: '45%',
      height: '200px',
      link: '/productos'
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Todo lo que Puedas Imaginar
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
              key={image.title}
              component={Link}
              to={image.link}
              //Otra forma de usar el link
              // component={'a'}
              // href={image.link}
              className={classes.imageWrapper}
              style={{
                width: image.width,
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

ProductosContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductosContainer);
