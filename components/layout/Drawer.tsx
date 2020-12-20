import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

interface MyDrawerProps {
  isOpen: boolean
  toggleDrawer: any
}

export default function MyDrawer({ isOpen, toggleDrawer }: MyDrawerProps) {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <div className={classes.list} role="presentation" onClick={toggleDrawer}>
        <List>
          <Link href="/" passHref>
            <ListItem button component="a">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  )
}
