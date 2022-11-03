import icon from "@/assets/icons/index";

const Icon = ({ iconName }) => {
  const IconComponent = icon[iconName];
  return <IconComponent />;
};

export default Icon;
