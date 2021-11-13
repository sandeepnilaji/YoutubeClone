import React, { useContext, useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from '@mui/material/Button';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from '@mui/icons-material/Mic';
import { Link } from "react-router-dom";
import {Context} from "../Context/Context";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Navbar(){

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [videoForm, setVideoForm] = useState(false);
  const VideohandleClickOpen = () => {
    setVideoForm(true);
  };

  const VideohandleClose = () => {
    setVideoForm(false);
  };


  const [inputSearch, setInputSearch] = useState("");
    const {hamburgerChange,handlecheckLogin} = useContext(Context);

    return(
        <div className="header">
        <FormDialog open={open} handleClose={handleClose}/>
        <div className="header-left">
          <MenuIcon onClick={()=>{handlecheckLogin()}} style={{ fontSize: 28 }} className="header-icon" />

          <Link to="/">
            <img src="https://raw.githubusercontent.com/Subhampreet/Youtube-Clone-ReactJS/main/public/logo.jpg" alt="logo" className="header-logo" width="56px" />
          </Link>
        </div>

        <div className="header-middle">
          <div>
             <input
            className="navbar-search-input"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"
            placeholder="Search"
          />

          <Link to={`/search`} className="header-input-icon">
            <SearchIcon className="search-icon" />
          </Link>
          </div>
          <Link to={`/`} style={{padding:"2%", color:"black"}}>
              <MicIcon />
          </Link>
        </div>

        <div className="header-right">
          <VideocamIcon style={{fontSize: 28}} onClick={VideohandleClickOpen}  className="header-icon" />
          <VideoFormDialog open={videoForm} handleClose={VideohandleClose} />
          <AppsIcon style={{ fontSize: 28 }} className="header-icon" />
          <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
          <Button variant="outlined" onClick={handleClickOpen}>Sign In</Button>
        </div>
      </div>
    )
}

export default Navbar;



function FormDialog ({open,handleClose}) {

  const [already, setAlready] = useState(false);

  function handleAready () {
    setAlready(!already);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{already ? "Sign In" : "Sign up"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAready}>{!already ? "Already have an accout ?":"New to You-Tube ?"}</Button>
          <Button onClick={handleClose}>{already ? "Login" : "Sign up"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



function VideoFormDialog ({open,handleClose}) {

  const [already, setAlready] = useState(false);

  function handleAready () {
    setAlready(!already);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{already ? "Sign In" : "Sign up"}</DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            id="Name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Thumnnail"
            label="Thumnnail"
            type="file"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="file"
            label="video"
            type="file"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Upload</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}