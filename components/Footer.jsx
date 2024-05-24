'use client';

import { setColorSort, setFilter } from '@/lib/features/todos/filterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Footer() {
    const todos = useAppSelector(state => state.todo?.todos);
    const totalInCompleted = todos?.filter(todo => !todo.completed)?.length;
    const dispatch = useAppDispatch();
    const { filter, colorSort } = useAppSelector(state => state.filter) || {};
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{totalInCompleted} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    onClick={() => {
                        dispatch(setFilter('all'));
                        dispatch(setColorSort(null));
                    }}
                    className={`cursor-pointer ${
                        filter === 'all' && 'font-bold'
                    }`}
                >
                    All
                </li>
                <li>|</li>
                <li
                    onClick={() => {
                        dispatch(setFilter('uncompleted'));
                        dispatch(setColorSort(null));
                    }}
                    className={`cursor-pointer ${
                        filter === 'uncompleted' && 'font-bold'
                    }`}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    onClick={() => {
                        dispatch(setFilter('completed'));
                        dispatch(setColorSort(null));
                    }}
                    className={`cursor-pointer ${
                        filter === 'completed' && 'font-bold'
                    }`}
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li
                    onClick={() => dispatch(setColorSort('green'))}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        colorSort === 'green' ? 'bg-green-500' : ''
                    }`}
                ></li>
                <li
                    onClick={() => dispatch(setColorSort('red'))}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                        colorSort === 'red' ? 'bg-red-500' : ''
                    }`}
                ></li>
                <li
                    onClick={() => dispatch(setColorSort('yellow'))}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                        colorSort === 'yellow' ? 'bg-yellow-500' : ''
                    }`}
                ></li>
            </ul>
        </div>
    );
}
