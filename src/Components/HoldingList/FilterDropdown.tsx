import React, { useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from 'react-bootstrap'
import Checkbox from '@mui/material/Checkbox';
import { setFilterList } from '../../_features/holdingListSlice'
import { useDispatch } from 'react-redux'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

type FilterDropdownProps = {
  propertyTypes: any[],
  filterPropTypes: any
}

const FilterDropdown: React.FunctionComponent<FilterDropdownProps> = ({ propertyTypes, filterPropTypes }) => {
  const [propType, setPropType] = React.useState<string[]>([]);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<typeof propType>) => {
    const {
      target: { value },
    } = event;
    console.log(event.target)
    dispatch(setFilterList(event.target?.value[event.target.value.length-1]))
    setPropType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    dispatch(setFilterList(propType))
  }, [propType])

  const resetFilters = () => {
    dispatch(setFilterList('reset'))
  }

  return (
    <div id='filter-dropdown'>
      <FormControl sx={{width: '100%'}}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={propType}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {propertyTypes.map((propertyType: any, index: number) => (
            <MenuItem key={index} value={propertyType.propertyType}>
              <Checkbox checked={propType.indexOf(propertyType.propertyType) > -1} />
              <ListItemText primary={propertyType.propertyType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className='d-grid gap-2 mt-4'>
        <Button variant='light' onClick={() => { resetFilters()}}>Reset Filters</Button>
      </div>
    </div>
  );
}

export default FilterDropdown;