import React from "react";
import { Typeahead } from 'react-bootstrap-typeahead';

function SearchSelect({
  // isLoading = false,
  id = "select",
  // placeholder = "",
  options,
  // labelKey = (option) => `${option}`,
  // renderMenuItemChildren = (option) => <span>{option}</span>,
  onChange,
  // onInputChange = () => {},
  // selected = [],
  // filterBy = () => true
}) {
  return (
    <Typeahead
      // selected={selected}
      onChange={onChange}
      // filterBy={filterBy}
      id={id}
      // isLoading={isLoading}
      // labelKey={labelKey}
      // onSearch={onInputChange}
      options={options}
      // placeholder={placeholder}
      // renderMenuItemChildren={renderMenuItemChildren}
    />
  );
}

export default SearchSelect;
