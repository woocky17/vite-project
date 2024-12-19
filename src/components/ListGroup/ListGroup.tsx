// import { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`padding 5px 0;
background: ${(props) => props.active && "blue"}`;

interface Props {
  item: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const handleClick = (e: MouseEvent) => console.log(e);
  //   item = [];
  //   const getMessage = () => {
  //     return item.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>{heading}</h1>
      {/* {item.length === 0 ? <p>No item found</p> : null} */}
      {item.length === 0 && <p>No item found</p>}

      <List>
        {item.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
