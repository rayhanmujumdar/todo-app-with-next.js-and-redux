'use client';
import { useAppSelector } from '@/lib/hooks';
import Todo from './Todo';

export default function TodoList() {
    const todos = useAppSelector(state => state.todo?.todos);
    const { filter, colorSort } = useAppSelector(state => state?.filter) || {};
    if (todos?.length === 0) {
        return (
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                <p className="text-red-300 text-sm text-center">
                    No todo found
                </p>
            </div>
        );
    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                ?.slice()
                ?.filter(todo => {
                    if (filter === 'completed') {
                        return todo.completed;
                    } else if (filter === 'uncompleted') {
                        return !todo.completed;
                    }
                    return true;
                })
                ?.filter(todo => {
                    if (colorSort) {
                        return todo.color === colorSort;
                    }
                    return true;
                })
                ?.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
        </div>
    );
}
