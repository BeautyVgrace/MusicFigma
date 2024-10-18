import React, { useState } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const HorizontalListItem = () => {
  const items = ['All', 'Listening', 'Learning', 'Rehearsal', 'Perform'];
  const [activeIndex, setActiveIndex] = useState(0); // Track the active item

  return (
    <>
      <style>
        {`
          .box {
            display: flex;
            justify-content: start;
            align-items: center;
               margin-bottom: 30px;
          }

          .list {
            display: flex;
            padding: 10px;
            justify-content: space-evenly;
                padding: 0px 0px;
    margin: 5px 0px;
            //    width: 100%;
          }

          .list-item {
            display: flex;
            justify-content: space-evenly;
            font-size: 12px;
            margin: 0;
            border-radius: 30px;
            cursor: pointer;
            padding: 8px 16px;
            transition: background-color 0.3s ease;
                padding: 5px 30px;
    margin: 0px 12px;
          }

          .list-item-active {
            background-color: #f1b942; /* Highlight active item */
          }

          .list-item-inactive {
            background-color: transparent; /* Default background for inactive items */
          }

          .list-item:hover {
            background-color: #f1b942; /* Highlight on hover */
            color: white;
          }

          .typography-active {
            color: white; /* Active text color */
          }

          .typography-inactive {
            color: inherit; /* Default text color */
          }
        `}
      </style>

      <Box className="box">
        <List className="list">
          {items.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => setActiveIndex(index)} // Set active item on click
              className={`list-item ${
                activeIndex === index ? 'list-item-active' : 'list-item-inactive'
              }`}
            >
              <Typography
                variant="body2"
                className={activeIndex === index ? 'typography-active' : 'typography-inactive'}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default HorizontalListItem;
