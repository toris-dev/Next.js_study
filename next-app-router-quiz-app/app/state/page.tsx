import State from '@/components/State';
import { getState } from '@/utils/functions';

const StatePage = () => {
  const states = getState();
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <State states={states}></State>
    </div>
  );
};

export default StatePage;
