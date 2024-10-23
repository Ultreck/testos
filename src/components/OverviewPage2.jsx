import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { TbSearch } from 'react-icons/tb';
import { Input, ScrollShadow } from '@nextui-org/react';
import CardComponents from '../components/core/overview/CardComponents.jsx';
import { FaPlusSquare, FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import BannerCard from '../components/core/overview/BannerCard.jsx';
import { ReactTyped } from 'react-typed';
import img from '../assets/wow.webp';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.avif';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.jpg';
import card8 from '../assets/card8.jpg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.png';
import card11 from '../assets/card11.jpg';
import card12 from '../assets/card12.svg';
import card13 from '../assets/card13.jpg';
import card14 from '../assets/card14.webp';
import card15 from '../assets/card15.jpg';
import card16 from '../assets/card16.jpg';
import card17 from '../assets/card17.jpg';
import card18 from '../assets/card18.jpg';
import card19 from '../assets/card19.jpg';
import card20 from '../assets/card20.jpg';
import card21 from '../assets/card21.jpg';
import card22 from '../assets/card22.avif';
import card23 from '../assets/card23.jpg';
import card24 from '../assets/card24.avif';
import card25 from '../assets/card25.jpg';
import cap1 from '../assets/capcut1.png';
import cap2 from '../assets/capcut2.png';
import cap3 from '../assets/capcut3.png';
import cap4 from '../assets/capcut4.png';

const OverviewPage2 = () => {
  const cards = [
    card1,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card21,
    card22,
    card23,
    card2,
    card24,
    card25,
  ];

  const bannerCards = [
    { description: 'Create Maps', icon: FaPlusSquare },
    { description: 'New Design', url: cap1 },
    { description: 'New Template', url: cap2 },
    { description: 'Create Banner', url: cap3 },
    { description: 'Create Charts', url: cap4 },
  ];
  return (
    <div>
      <DashboardHeader
        content={
          <div className="relative">
            <Input
              type="text"
              name="query"
              id="query"
              size="lg"
              classNames={{
                input: 'text-base',
                base: 'transition-all duration-300 w-[320px]',
                inputWrapper: 'h-13 rounded-full',
              }}
              startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
              placeholder="Search.."
            />
          </div>
        }
      />
      <div className="text px-5">
        <section className="text">
          <div className="text bg-[#B4D7FF] flex items-center justify-between rounded-xl pl-5">
            <div className="text">
              <h1 className="text-4xl font-bold my-3">
                What are you{' '}
                <ReactTyped
                  className="bg-transparent"
                  strings={['creating', 'analyzing', 'building', 'presenting', 'reporting']}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={3000}
                  loop
                />{' '}
                today
              </h1>
              <p className="text-lg leading-none mt-2">
                Start by creating a new design or exploring banking templates.
              </p>
              <p className="text-[16px]">Adjust gradients, stylize, and more.</p>
              <button className="text-white rounded-xl px-5 py-3 mt-5 my-3 bg-[#8B3DFF] ">Design with Ease</button>
            </div>
            <div className="text w-1/3">
              <img src={img} alt="" className="text" />
            </div>
          </div>
        </section>
        <section className="text mt-16">
          <h1 className="text-2xl font-bold my-3">You may want to try</h1>
          <ScrollShadow hideScrollBar offset={100} orientation="horizontal" className="max-w-[100%]">
            <div className="text flex gap-5">
              {bannerCards.map((card) => (
                <BannerCard key={card.rul} data={card} />
              ))}
            </div>
          </ScrollShadow>
        </section>
        <section className="text mt-16">
          <h1 className="text-2xl font-bold my-3">Start with templates</h1>
          <div className="text grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-5">
            {cards.map((url) => {
              return (
                <CardComponents imgUrl={url} key={url}>
                  <button className="bg-red-500 absolute top-2 text-xs px-2 py-1 gap-2 right-2 flex items-center justify-center rounded-lg">
                    <FaRegHeart className="text-lg " /> 1000
                  </button>
                  <div className="text flex justify-between items-center px-3 py-3 space-x-4">
                    <button className="bg-gray-500/80 w-8 h-8 flex items-center justify-center rounded-lg">
                      <FiShare2 />
                    </button>
                    <button className="bg-gray-500/80 w-8 h-8 flex items-center justify-center rounded-lg">
                      <FaRegBookmark />
                    </button>
                  </div>
                </CardComponents>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverviewPage2;
