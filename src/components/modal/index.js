import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    margin: '0 auto',
    top: 500,
    backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'center',
    alignContent: 'center',
  }, alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',}
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{props.modalTitle}</h2>
      <p id="simple-modal-description">
{props.modalBody}
      </p>
    </div>
  );

  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <button type="button" onClick={handleOpen}>
        Demo
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}