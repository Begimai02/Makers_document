import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { docsContext } from "../../contexts/DocsContext";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    background: "#545E80",
    color: "white",
    width: "300px",
    marginTop: "20px",
    height: "130px",
    backgroundColor: "black!important",
    borderRadius: "25px",
    margin: "10px",
    flexWrap: "wrap",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  color: {
    color: "#FFE600 !important",
    marginTop: "-40px",
  },
  text: {
    marginTop: "7px",
    textAlign: "center",
  },
  text1: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7px",
    fontSize: "100px",
  },
  h: {
    backgroundColor: "white",
    outline: "none",
    border: "none",
  },
  media: {
    minHeight: "100px",
    backgroundColor: "black!important",
  },
  margin: {
    color: "gray",
  },
  textTitle: {
    color: "#FFE600",
  },
});

export default function DocsCard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { docs, getDocs } = useContext(docsContext);
  const [titles, setTitles] = useState(docs);
  // console.log(docs)
  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div>
      {titles ? (
        <>
          <div
            style={{
              margin: "50px auto",
              padding: "0",
              width: "100%",
              maxWidth: "600px",
              cursor: "pointer",
            }}
          >
            <IconButton>
              <Typography
                color="primary"
                align="center"
                variant="h1"
                component="h2"
                gutterBottom
              >
                Java Script
              </Typography>
            </IconButton>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            {docs.map((item, index) => (
              <div key={index + ""}>
                <Card className={classes.root}>
                  <CardActionArea style={{ height: "100%" }}>
                    <CardContent>
                      <CardActions>
                        <Typography
                          className={classes.textTitle}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {item.title}
                        </Typography>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
