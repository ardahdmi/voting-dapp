export const getAvatarForUser = (nickname: string) => {
  return `https://avatars.dicebear.com/api/miniavs/${
    nickname || "default"
  }.svg?b=%230c0c14&r=50&scale=110&translateX=5&translateY=1`;
};

export const getRandomBorderColor = (number: number) => {
  const borderColorList = [
    "border-red-400",
    "border-green-500",
    "border-blue-400",
    "border-pink-400",
    "border-orange-400",
    "border-indigo-500",
    "border-fuchsia-500",
  ];
  const randomIndex = number % borderColorList.length;
  return borderColorList[randomIndex];
};
