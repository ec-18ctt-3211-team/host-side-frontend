import { Layout } from 'components/common';

export default function Blank(): JSX.Element {
  return (
    <Layout>
      <div className="h-full w-full bg-white flex justify-center items-center rounded">
        Hello!
      </div>
    </Layout>
  );
}
