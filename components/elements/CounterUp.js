import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterUp({ count, time }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <span ref={ref}>
            {inView ? (
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => <span ref={countUpRef}></span>}
                </CountUp>
            ) : (
                <span>0</span>
            )}
        </span>
    );
}
