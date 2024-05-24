export const getLocalStorage = () => {
    if (typeof window === 'undefined') {
        return;
    }
    const filter = JSON.parse(localStorage.getItem('filter'));
    const todos = JSON.parse(localStorage.getItem('todos'));
    return {
        filter,
        todos,
    };
};

export const setInitialLocalStorage = () => {
    if (typeof window === 'undefined') {
        return;
    }
    const { filter, todos } = getLocalStorage() || {};
    if (!filter && !todos) {
        localStorage.setItem(
            'filter',
            JSON.stringify({
                filter: 'all',
                colorSort: null,
            })
        );
        localStorage.setItem(
            'todos',
            JSON.stringify({
                todos: [
                    {
                        todoText: 'Learn Redux Basics',
                        completed: false,
                        id: crypto.randomUUID(),
                        color: 'yellow',
                    },
                ],
                inCompleted: 0,
            })
        );
    } else {
        return;
    }
};

export const setTodosLocalStorage = state => {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.setItem('todos', JSON.stringify(state));
};

export const setFilterLocalStorage = state => {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.setItem('filter', JSON.stringify(state));
};
