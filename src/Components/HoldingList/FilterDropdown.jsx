import { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux'
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { setFilterList } from '../../_features/holdingListSlice';

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

export default function FilterDropdown({ propertyTypes }) {

  const dispatch = useDispatch();

  const [ propType, setPropType ] = useState([]);

  const handleChange = (event) => {
    const {target: { value },} = event;
    setPropType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {dispatch(setFilterList(propType))}, [propType])

  return (
    <div>
      <FormControl sx={{ width: '90%', backgroundColor: 'white' }}>
        <InputLabel id="demo-multiple-checkbox-label">Filter by Type</InputLabel>
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
          {propertyTypes.map((propertyType) => (
            <MenuItem key={propertyType.propertyType} value={propertyType.propertyType}>
              <Checkbox checked={propType.indexOf(propertyType.propertyType) > -1} />
              <ListItemText primary={propertyType.propertyType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}