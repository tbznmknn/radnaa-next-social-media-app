import { useInView } from "react-intersection-observer";
interface InfiniteScrollContainerProps extends React.PropsWithChildren {
  onBottomReached: () => void;
  className?: string;
}
export default function InfiniteScrollContainer({
  children,
  className,
  onBottomReached,
}: InfiniteScrollContainerProps) {
  const { ref } = useInView({
    rootMargin: "200px",
    onChange: (inView) => {
      if (inView) {
        onBottomReached();
      }
    },
  });
  return (
    <div>
      {children} <div ref={ref}></div>
    </div>
  );
}
