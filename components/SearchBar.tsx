import { TextField } from "@mui/material";
import InputUnstyled from '@mui/base/InputUnstyled';

export default function SearchBar() {
  return (
    <div className="search-bar-div">
      <TextField
        className="search-bar"
        placeholder="Explore"
      />
    </div>
  );
}
