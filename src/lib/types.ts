export type ChatData = {
  title: string;
  content: string;
  type: "full" | "half";
};

export type ChatAnimationControl = {
  action: () => void;
  icon: string;
};
