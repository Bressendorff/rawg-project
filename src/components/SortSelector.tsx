import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { name: "Relevance", value: "" },
    { name: "Release date", value: "-released" },
    { name: "Rating", value: "-metacritic" },
    { name: "Name (A-Z)", value: "name" },
    { name: "Name (Z-A)", value: "-name" },
    { name: "Date Added", value: "-added" },
  ];

  const selectedSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: " + selectedSortOrder?.name || "Sort game"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((s) => (
          <MenuItem key={s.value} onClick={() => onSelectSortOrder(s.value)}>
            {s.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
