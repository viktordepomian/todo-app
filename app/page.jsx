import Header from '@components/Header';
import TodoContainer from '@components/TodoContainer';

export default function page() {
    return (
        <div className="w-[330px]">
            <Header />
            <TodoContainer />
        </div>
    );
}
