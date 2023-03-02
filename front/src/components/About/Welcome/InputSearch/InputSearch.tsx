import {useState} from "react";
import {Autocomplete, IconButton, TextField} from "@mui/material";

import {useSelector} from "react-redux";
import {tourSelector} from "../../../../redux/selectors/tour-selector";


export default function InputSearch() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState<string|null>('')
    const tours = useSelector(tourSelector)


    const listTours = tours?.map(el => el.header)
    return (

        listTours != undefined ?
            <Autocomplete
                id="asynchronous-demo"
                sx={{width: 400}}
                open={open}

                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                options={listTours}
                onChange={(event, newValue) => {
                    setSearch(newValue)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Поиск"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                  <IconButton></IconButton>
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}


                    />
                )}
            />
            : <div></div>
    );
}

