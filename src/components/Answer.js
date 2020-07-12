import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { socket } from '../App';

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
    maxWidth: '80%',
  },
  backDrop: {
    background: '-webkit-gradient(linear, left top, left bottom, from(rgba(94,28,236,0.8)), to(rgba(247,65,80,0.8)))',
  },
}));

export default function Answer(props) {
  const classes = useStyles();

  const answer = (isTrue) => {
    socket.emit('answer', isTrue);
    props.answerCallback();
  }

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      closeAfterTransition
      disableBackdropClick={true}
      disableEscapeKeyDown={false}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        classes: {
          root: classes.backDrop
        }
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <h2 className="answer-modal-title">Answer!</h2>
          <p className="answer-modal-question">{props.question}</p>
          <div className="answer-modal-button-container">
            <Button className="answer-modal-button" variant='containedPrimary' onClick={() => answer(true)}>Yes</Button>
            <Button className="answer-modal-button" variant='containedPrimary' onClick={() => answer(false)}>No</Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}