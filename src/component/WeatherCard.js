import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    
  },
}));

export default function RecipeReviewCard({weatherData,date}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let L = weatherData.name.charAt(0)
  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {L}
          </Avatar>
        }
       
        title="Today's weather"
        subheader={date}
       
      />
      <img className="cityIcon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
      
      <CardContent>
      <Typography variant="body" color="textSecondary" component="p">
      {weatherData.name}
      <sup>{weatherData.sys.country}</sup>
      
        </Typography>
        <Typography variant="h2" color="textSecondary" component="p">
          {(weatherData.main.temp)}
          <sup>&deg;C</sup>
        </Typography>

        <Typography>
        {weatherData.weather[0].description}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}


