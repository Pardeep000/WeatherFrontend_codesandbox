import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
//
import "../styles/card.css";
//
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <div className="mainCardContainer">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Weather Details of the City
          </Typography>
          <div className="cardSection1">
            <div>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold" }}
                color="text.dark"
              >
                KARACHI, PK
              </Typography>
              <Typography sx={{ fontSize: 15, mt: 0 }} color="text.secondary">
                moderate rain
              </Typography>
            </div>
            <div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                style={{
                  width: "10vw",
                  height: "15vh",
                  position: "relative",
                  top: "-16%"
                }}
                alt=""
              />
            </div>
          </div>
          <div className="cardSection2">
            <div className="temp">
              <Typography
                sx={{ fontSize: 75, mt: 0, fontWeight: "bold" }}
                color="text.dark"
              >
                14&deg;C
              </Typography>
            </div>
            <div className="details">
              <p>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Feels Like
                </span>
                13&deg;C
              </p>
              <p>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  min-max
                </span>
                13&deg;C/15&deg;C
              </p>
              <p>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Wind-speed
                </span>
                0.62
              </p>
              <p>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Humidity
                </span>
                64
              </p>
              <p>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Pressure
                </span>
                1015 hpa
              </p>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className="buttonSection">
            <div className="buttons">
              <Button className="b" size="small" sx={{ mx: 0 }}>
                <EditIcon />
              </Button>
            </div>
            <dib className="buttons2">
              <Button size="small" sx={{ mx: 0 }}>
                <HighlightOffIcon />
              </Button>
            </dib>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
