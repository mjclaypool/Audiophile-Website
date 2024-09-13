import { createPortal } from 'react-dom';
import Categories from './Categories';

export default function NavModal() {
  return createPortal(
    <>
      <dialog
        className="fixed top-[92px] md:top-[89px] xl:top-[97px] flex justify-center w-full h-full bg-n-grey-v-dark bg-opacity-75 z-40"
        open
      >
        <div className="bg-n-white pt-8 md:pt-[57px] w-full h-[750px] md:h-[340px] xl:h-[420px] rounded-b-lg">
          <Categories />
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}