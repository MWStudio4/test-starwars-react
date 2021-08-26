import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../features/people'
import { fetchProfile } from '../features/people/actions'
import { CLEAR_PERSON } from '../features/people/actionTypes'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  card: {
    width: 400,
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  progressWrap: {
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    minWidth: 350,
  },
})

function createData(name: string, value: string | number) {
  return { name, value }
}

export const Profile: React.FC = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const history = useHistory()
  // @ts-ignore
  const { id } = useParams()
  const person = useSelector(selectors.getPerson)

  useEffect(() => {
    dispatch({ type: CLEAR_PERSON })
    fetchProfile(id)(dispatch)
  }, [id])

  const isFetching = Object.keys(person).length === 0

  const rows = []
  if (!isFetching) {
    rows.push(createData('Birth Year', person.birth_year || 'N/A'))
    rows.push(createData('Height', person.height || 'N/A'))
    rows.push(createData('Mass', person.mass || 'N/A'))
    rows.push(createData('Gender', person.gender || 'N/A'))
    rows.push(createData('Hair Color', person.hair_color || 'N/A'))
    rows.push(createData('Skin Color', person.skin_color || 'N/A'))
  }

  return (
    <>
      <Container className={classes.root} maxWidth="md">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://varskoy.com/upload/adwex.minified/webp/c4c/90/c4c9acd9ed7dc8379d8e9d92cb8b2322.webp"
              title="Contemplative Reptile"
            />
            {isFetching ? (
              <div className={classes.progressWrap}>
                <CircularProgress />
              </div>
            ) : (
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {person.name}
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Characteristic</TableCell>
                        <TableCell align="right">Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            )}
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => history.push('/')}
            >
              Back to List
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}
