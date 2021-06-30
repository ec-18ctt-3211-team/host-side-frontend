export default function DivPx(props: { size: number }): JSX.Element {
  return (
    <div style={{ width: `${props.size}px`, height: `${props.size}px` }}></div>
  );
}
