import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { workExpSec } from '../../data';
import { professionalSummary } from '../../data';
import './Resume.css';

const styles = theme => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  subtitle: {
    display: 'block',
  }
});

class Resume extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">
              <span className={classes.subtitle}><b>Full Name</b>: GAGANPREET K. HAYER</span>
              <span className={classes.subtitle}><b>Title</b>: WEB UI DEVELOPER</span>
              <span className={classes.subtitle}><b>Email ID</b>: preetkaur9016@gmail.com</span>
            </ListSubheader>}>
          <ListItem button onClick={this.handleClick}>
            <ListItemText className="resume-titles" inset primary="PROFESSIONAL SUMMARY" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText inset primary={
                  professionalSummary.map((PSData, idy) => {
                    return (
                      <ul key={`PS${idy}`}>
                        <li>
                          {PSData}
                        </li>
                      </ul>
                    )
                  })
                } />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <List
          component="nav"
          >
          <ListItem button onClick={this.handleClick}>
          <ListItemText className="resume-titles" inset primary="WORK EXPERIENCE" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {
            workExpSec.map((info, idx) => {
              return (
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding key={`WX${idx}`}>
                    <ListItemText inset primary={info.company} />
                    <ListItemText inset primary={info.duration} />
                    <ListItemText inset primary={info.jobtitle} />
                    <ListItem button className={classes.nested}>
                      <ListItemText inset primary={
                        info.responsibilities.map((ListOfResp, idl) => [
                        <ul key={`LOR${idl}`}>
                          <li>
                            {ListOfResp}
                          </li>
                        </ul>
                        ])
                      }
                      />
                    </ListItem>
                  </List>
                </Collapse>
            )})
          }
        </List>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemText className="resume-titles" inset primary="EDUCATION" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText inset primary="Bachelor of Technology in Computer Science from Lovely Professional University, India." />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);