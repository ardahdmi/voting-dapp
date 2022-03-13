import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { usePollContract } from "../../hooks/usePollContract";
import { getAvatarForUser, getRandomBorderColor } from "../../utils/helpers";
import { QuestionIcon, VoteIcon } from "../../public/icons";
import { CardTag } from "../shared/Text";
import clsx from "clsx";
import {
  SingleUserCardProps,
  UserInfoTagProps,
  UserStruct,
} from "../../domain/interfaces";

import "swiper/css";
import { useEffect, useState } from "react";

export const UsersCard = () => {
  const [allUsers, setAllUsers] = useState<UserStruct[] | undefined>([]);
  const { getAllUsers } = usePollContract();

  useEffect(() => {
    const getUsers = async () => {
      const userList = await getAllUsers();
      console.log(userList);

      setAllUsers(userList);
    };
    getUsers();
  }, []);

  // getAllUsers

  return (
    <div className="flex h-full w-full flex-col justify-start">
      <div className="relative flex h-full w-full flex-col gap-y-4 overflow-x-hidden overflow-y-scroll pt-3">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          className="h-full w-full"
        >
          {allUsers.map((user, idx) => (
            <SwiperSlide key={idx}>
              <SingleUserCard number={idx} user={user} />
            </SwiperSlide>
          ))}
          {allUsers.length > 3 && <Navigation />}
        </Swiper>
      </div>
    </div>
  );
};

const SingleUserCard: React.FC<SingleUserCardProps> = ({ number, user }) => {
  const borderColor = getRandomBorderColor(number);
  const { nickname, isVoter, isQuestioner } = user;
  return (
    <div className="mr-6 flex h-16 select-none items-center justify-between overflow-hidden rounded-lg bg-stone-800 p-2 lg:h-14 xl:h-16">
      <div className="flex items-center gap-x-[10px]">
        <div
          className={clsx(
            "flex rounded-full border-[2px] shadow-lg",
            borderColor
          )}
        >
          <Image
            className="border border-zinc-50"
            src={getAvatarForUser(nickname)}
            width={40}
            height={40}
          />
        </div>
        <span className="translate-y-[2px] text-base font-medium text-white/80">
          {nickname}
        </span>
      </div>
      <div className="translate-x-5 scale-150">
        <UserInfoTag {...{ isVoter, isQuestioner }} />
      </div>
    </div>
  );
};

const Navigation = () => {
  const swiper = useSwiper();
  console.log(swiper.isBeginning);

  return (
    <div className="absolute right-[6px] top-0 bottom-0 z-10 flex w-4 flex-col justify-center gap-y-6">
      <div onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("h-5 w-5 text-white/60")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("h-5 w-5 rotate-180 text-white/60")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const UserInfoTag: React.FC<UserInfoTagProps> = ({ isVoter, isQuestioner }) => {
  return (
    <div className="flex scale-[40%] flex-col justify-end gap-y-3">
      <CardTag
        icon={<VoteIcon />}
        text="votes"
        className={clsx(
          "bg-yellow-700 text-yellow-200",
          isVoter ? "visible" : "invisible"
        )}
      />
      <CardTag
        icon={<QuestionIcon />}
        text="asks"
        className={clsx(
          "bg-purple-700 text-purple-200",
          isQuestioner ? "visible" : "invisible"
        )}
      />
    </div>
  );
};

// const DashboardPage = () => {
//   const { addUser, allUsers, isWalletConnected, addQuiz, allQuizes } =
//     usePollContract();

//   return (
//     <div className="flex flex-col items-center gap-y-5 bg-red-300">
//       <button
//         onClick={() =>
//           addUser({ nickname: "arda", isVoter: true, isQuestioner: true })
//         }
//         className="bg-gray-400"
//       >
//         Add user
//       </button>
//       <div className="">{allUsers.length}</div>
//       <button
//         onClick={() =>
//           addQuiz({
//             title: "arda",
//             questions: ["neden"],
//             answers: [["oyle", "mi"]],
//           })
//         }
//         className="bg-gray-400"
//       >
//         Add quiz
//       </button>
//       <div className="mt-12">{JSON.stringify(allQuizes)}</div>
//     </div>
//   );
// };

// export default IndexPage;
