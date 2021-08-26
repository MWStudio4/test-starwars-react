import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  CircularProgress,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { useHistory } from 'react-router-dom'
import { selectors } from '../features/people'
import { fetchPeople } from '../features/people/actions'
import { useStyles } from './homeStyles'

export const Home: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const people = useSelector(selectors.getPeopleList)
  const count = useSelector(selectors.getPeopleCount)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchPeople(page)(dispatch)
  }, [page])

  const onChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  const onSelectProfile = (id: number) => () => {
    history.push(`/profile/${id}`)
  }

  const totalPages = Math.ceil(count / 10)

  return (
    <div>
      <Container className={classes.root} maxWidth="md">
        {people.length > 0 ? (
          <>
            <List className={classes.root}>
              {people.map((person) => (
                <div key={person.id}>
                  <ListItem
                    alignItems="flex-start"
                    button
                    onClick={onSelectProfile(person.id)}
                  >
                    <ListItemAvatar>
                      <Avatar alt={person.name} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={person.name}
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Birth Year: {person.birthYear}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              ))}
            </List>
            <Pagination
              count={totalPages}
              page={page}
              onChange={onChangePage}
              className={classes.pagination}
            />
          </>
        ) : (
          <div className={classes.progressWrap}>
            <CircularProgress />
          </div>
        )}
      </Container>
    </div>
  )
}
