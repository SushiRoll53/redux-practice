import Counter from '@/component/Counter';
import type { NextPage } from 'next';


const CounterPage: NextPage = () => {
    return (
        <div>
            <h1>Welcome to the Counter Page</h1>
            <p>This is a simple example of integrating Redux with a counter component in Next.js.</p>
            <Counter />
        </div>
    );
};

export default CounterPage;
