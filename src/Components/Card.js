/** @format */

import React from 'react';

function Card() {
  return (
    <div className=' rounded-xl bg-primary w-80 h-fit'>
      <div>
        <div>
          <div className=' rounded-xl h-fit relative bg-Secondary w-72 m-auto mt-4'>
            <div className=' h-44'>
              <div className='h-20 rounded-t-xl bg-Tertairy'></div>
              <div className=' absolute top-10 m-auto left-24 flex-col '>
                <div className='h-16 m-auto w-16 rounded-xl bg-primary'></div>
                <div className='Pro text-center mt-3'>
                  <p className='font-poppins text-sm font-medium text-white'>
                    Mohamed Ali
                  </p>
                  <p className='font-poppins text-xs font-medium text-body'>
                    @malidev
                  </p>
                </div>
              </div>
            </div>
            <div className='flex gap-2 items-center justify-center py-4'>
              <div className='bg-primary w-10 h-10 rounded-lg'></div>
              <div className='bg-primary w-10 h-10 rounded-lg'></div>
              <div className='bg-primary w-10 h-10 rounded-lg'></div>
              <div className='bg-primary w-10 h-10 rounded-lg'></div>
              <div className='bg-primary w-10 h-10 rounded-lg'></div>
            </div>
          </div>
        </div>

        <div className='p-4 rounded-xl h-fit bg-Secondary w-72 m-auto my-4'>
          <div>
            <p className='font-medium text-white '>About</p>
            <p className=' text-xs font-medium leading-6 font-poppins mt-4 text-body'>
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered alteration in some form, believable.
            </p>
          </div>

          <div className=''>
            <p className=' mt-7 font-medium text-white '>Skills</p>
            <div className='font-poppins flex gap-4 mt-4 text-xs font-medium text-white'>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>Frontend</p>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>UI Design</p>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>CCNA</p>
            </div>
            <div className='font-poppins flex gap-4 mt-4 text-xs font-medium text-white'>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>CCNP</p>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>ETH</p>
              <p className='bg-primary py-2 px-3 rounded-lg w-fit'>ML & AI</p>
            </div>
          </div>
        </div>

        {/* <div className='flex gap-3 items-start p-3 h-fit rounded-xl  bg-Secondary w-72 m-auto my-4'>
          <div className='bg-primary w-9 h-9 rounded-lg'></div>
          <p className=' font-poppins text-xs font-medium text-body mt-3'>
            Fikrcamp | YouTube | Google | W3
          </p>
        </div>

        <div className='flex gap-3 items-start p-3 h-fit rounded-xl  bg-Secondary w-72 m-auto my-4'>
          <div className='bg-primary w-9 h-9 rounded-lg'></div>
          <p className=' font-poppins text-xs font-medium text-body mt-3'>
            Fikrcamp | YouTube | Google | W3
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
