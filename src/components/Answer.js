import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#F2F2F2',
    boxShadow: '5px 10px 10px 1px rgba(0, 0, 255, .2)',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
  },
  backDrop: {
    background: '-webkit-gradient(linear, left top, left bottom, from(rgba(94,28,236,0.8)), to(rgba(247,65,80,0.8)))',
  }
}));

export default function Answer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const answer = (isTrue) => {
    props.socket.emit('answer', isTrue);
    handleClose();
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        open modal
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop
          }
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 class="answer-modal-title">Answer!</h2>
            <p class="answer-modal-question">{props.question}</p>
            <div>
              <Button variant='containedPrimary' onClick={() => answer(true)}>Yes</Button>
              <Button variant='containedPrimary' onClick={() => answer(false)}>No</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}