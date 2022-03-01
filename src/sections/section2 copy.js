import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const tileData = [
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "john smith" },
  { img: "http://placekitten.com/200/200", title: "cat", author: "mary smith" },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

export default function App() {
  const classes = useStyles();  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}