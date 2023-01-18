
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router"
import counterStyle from '../styles/Counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])


    return (
        <>
            <main className={counterStyle.main}>
            <div className={counterStyle.container}>
            <div className={counterStyle.title}>COUNTER PAGE</div>
            <div className={counterStyle.greeting}>Welcome {isUser}</div>
                    <div><span className={counterStyle.value}>{number}</span> </div>
                   
<div className={counterStyle.buttonSection}>
                    <button className={counterStyle.button} onClick={() => setNumber(number + 1)}>Increment</button>
                    <button className={counterStyle.button} onClick={() => setNumber(number - 1)}>Decrement</button>
                    </div>
                    </div>
            </main>
        </>
    )
}