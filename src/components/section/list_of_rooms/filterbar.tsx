import { Icon, InlineIcon } from '@iconify/react';
import DivPx from '../../common/divpx';
import filterOutline from '@iconify/icons-teenyicons/filter-outline';
import downSmallOutline from '@iconify/icons-teenyicons/down-small-outline';

interface Props {
  location: string;
  total_result: number;
}

export default function FilterBar(props: Props): JSX.Element {
  return (
    <div className="flex flex-wrap items-end justify-center text-center">
      <span className="mr-auto py-2">
        {props.total_result} places in {props.location}
      </span>
      <div className="flex justify-center items-center">
        <Icon icon={filterOutline} style={{ fontSize: '20px' }} />
        <DivPx size={32} />
        <div className="text-center border rounded-xl flex p-2">
          <span className="px-2">Sort</span>
          <InlineIcon icon={downSmallOutline} />
        </div>
      </div>
    </div>
  );
}
