// import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// import TodoList from '@/components/TodoList';
const TodoList = dynamic(() => import('@/components/TodoList'), {
    ssr: false,
});
const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: false,
});
export default function Home() {
    return (
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <Header />
                <hr className="mt-4" />
                <Suspense
                    fallback={<p className="text-sm text-center">loading</p>}
                >
                    <TodoList />
                </Suspense>
                <hr className="mt-4" />
                <Suspense
                    fallback={<p className="text-sm text-center">loading</p>}
                >
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}
