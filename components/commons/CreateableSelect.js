"use client";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import slugify from "slugify";

const CreatableSelectComponent = ({
  defaultOptions = [],
  isMultiple = false,
  setSelectValue,
  defaultValue = [],
  createFunction,
}) => {
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleCreate = async (inputValue) => {
    if (!inputValue) return;
    const optionList = {
      label: inputValue,
      value: slugify(inputValue, { lower: true }),
    };
    setIsLoading(true);
    const newOption = await createFunction(optionList);
    setSelectValue((prev) => [...prev, newOption]);
    setValue((prev) => [...prev, newOption]);
    setOptions((prev) => [...prev, newOption]);
    setIsLoading(false);
  };

  return (
    <CreatableSelect
      id="long-value-select"
      instanceId="long-value-select"
      isMulti={isMultiple}
      isClearable
      closeMenuOnSelect={false}
      isLoading={isLoading}
      isDisabled={isLoading}
      onChange={(newValue) => {
        setSelectValue(newValue);
        setValue(newValue);
      }}
      onCreateOption={(inputValue) => handleCreate(inputValue)}
      options={options}
      value={value}
    />
  );
};

export default CreatableSelectComponent;
