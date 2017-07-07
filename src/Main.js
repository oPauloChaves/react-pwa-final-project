import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { deepPurple700 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple700
  },
})

class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Final Project"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={this.handleToggle}
          >
            <AppBar title="Final Project" />
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
