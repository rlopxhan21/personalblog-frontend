import React from "react";
import moment from "moment";

import { RouterLink } from "./RouterLink";
import {  ResultDataType } from "../../Interface/Interface";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface Props {
  item: ResultDataType,
}

export const CustomCard: React.FC<Props> = ({ item }) => {

  return (
    <Card sx={{ width: { xs: "90%", md: "30%" }, textDecoration: "none" }}>
      <RouterLink to={`/${item.id}`}>
        <CardMedia
          component="img"
          alt="No Image Found!"
          src={item.imagefield}
        />
        <CardContent>
          <Chip label="linux/terminal_commands" sx={{ px: 2 }} />
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="body1">
            {moment(new Date(item.updated)).format("LL")} --- 5min read
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.header.slice(0, 256)}
          </Typography>
        </CardContent>
      </RouterLink>
    </Card>
  );
};
