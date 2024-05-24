'use client';
import {
    addTodo,
    clearAll,
    clearCompleted,
} from '@/lib/features/todos/todoSlice';
import { useAppDispatch } from '@/lib/hooks';
import notesIcon from '@/public/assets/images/notes.png';
import Image from 'next/image';
import doubleTickIcon from '/public/assets/images/double-tick.png';
export default function Header() {
    const dispatch = useAppDispatch();
    const handleAddTodo = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const todoText = formData.get('todoText');
        dispatch(addTodo({ todoText }));
        e.target.reset();
    };
    return (
        <div>
            <form
                onSubmit={handleAddTodo}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <Image src={notesIcon} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    name="todoText"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className="appearance-none w-8 h-8 bg-[url('/assets/images/plus.png')] bg-no-repeat bg-contain"
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    onClick={() => dispatch(clearAll())}
                    className="flex space-x-1 cursor-pointer"
                >
                    <Image
                        className="w-4 h-4"
                        src={doubleTickIcon}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li
                    onClick={() => dispatch(clearCompleted())}
                    className="cursor-pointer"
                >
                    Clear completed
                </li>
            </ul>
        </div>
    );
}
