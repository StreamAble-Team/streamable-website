import React, { useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownItemIcon,
  DropdownItemText,
  DropdownSelectedIconContainer,
  DropdownSelectedText,
  DropdownWrapper,
} from "./Dropdown.styles";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

let data = [
  {
    label: "9anime",
    value: "9anime",
    image:
      "https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.my.nineanime/87b2fe48-9c36-11eb-8292-21241b1c199b/128x128",
  },
];

const Dropdown = ({ data, onSelect, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const proxy = `https://proxy.vnxservers.com`;

  const renderDropdown = () => {
    if (isOpen) {
      return (
        <DropdownWrapper>
          {data?.map((item) => (
            <DropdownItem key={item.value} onClick={() => itemPressed(item)}>
              <DropdownItemIcon
                src={`${proxy}/${item.image}`}
                alt={item.label}
              />
              <DropdownItemText>{item.label}</DropdownItemText>
            </DropdownItem>
          ))}
        </DropdownWrapper>
      );
    }
    return null;
  };

  const itemPressed = (item) => {
    setSelected(item);
    setIsOpen(false);
    onSelect(item);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  if (!data) return null;
  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <DropdownItemIcon
          src={
            selected
              ? `${proxy}/${selected.image}`
              : `${proxy}/${data[0].image}`
          }
        />
        <DropdownSelectedText>
          {selected ? selected.label : data[0].label}
        </DropdownSelectedText>
        <DropdownSelectedIconContainer>
          {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </DropdownSelectedIconContainer>
      </DropdownButton>
      {renderDropdown()}
    </DropdownContainer>
  );
};

export default Dropdown;
