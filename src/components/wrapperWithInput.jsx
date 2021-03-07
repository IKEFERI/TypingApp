import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useEffect, useRef} from "react";

function WrapperWithInput(props) {
  const classes = useStyles();
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className={classes.root} onClick={() => input.current.focus()}>
      <Box style={{position: "absolute", left: "-200%"}}>
        <input type="text" ref={input} />
      </Box>
      {props.children}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f1f1f1",
    minHeight: "100vh",
  },
});

export default WrapperWithInput;
