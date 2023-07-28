import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
        <div className="flex flex-row gap-2 bg-transparent text-secondary/75 p-2 rounded-full border-2 border-secondary/75 items-top ">
            <div
                className=" cursor-pointer z-[10]"
                onClick={() => navigate('/books?q=' + search)}
            >
                <SearchIcon className="w-[24px] h-[24px]" />
            </div>
            <input
                className="w-full bg-transparent outline-none"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <div
                onClick={() => setSearch('')}
                className={
                    'transition-all ' +
                    (search.length >= 1
                        ? ' opacity-100 cursor-pointer'
                        : ' opacity-0 pointer-events-none')
                }
            >
                <ClearIcon fontSize={'small'} />
            </div>
        </div>
    );
}