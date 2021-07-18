export default function Footer(): JSX.Element {
  return (
    <div className="w-full p-4 bg-brown-800 text-brown-100 text-center z-10">
      <div className="pb-2 uppercase text-base">Our team</div>
      <div className="flex justify-around">
        <div>Huynh Bao Di</div>
        <div>Ly Ngoc Nhi</div>
        <div>Ngo Minh Khoi</div>
        <div>Truong Cong Anh</div>
      </div>
    </div>
  );
}
