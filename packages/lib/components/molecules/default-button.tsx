import { DefaultButton as DefaultButtonType } from "sanity/sanity.types";
import { LinkExternal, LinkInternal } from "../atoms";

interface DefaultButtonProps extends DefaultButtonType {}
export const DefaultButton: React.FC<DefaultButtonProps> = ({
  buttonStyle,
  label,
  link,
}) => {
  return link?.map((item) => {
    switch (item._type) {
      case "linkExternal":
        return (
          <LinkExternal
            key={item._key}
            variant={buttonStyle}
            label={label}
            {...item}
          />
        );
      case "linkInternal":
        return (
          <LinkInternal
            key={item._key}
            variant={buttonStyle}
            label={label}
            {...item}
          />
        );
    }
  });
};
