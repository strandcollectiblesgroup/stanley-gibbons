import { Heading } from "@chakra-ui/react";
import { Container, SectionWrapper, FlexGrid, FlexGridColumn } from "../layout";
import { FeaturedMedia, DefaultButton, PortableText } from "../molecules";
import { MediaAndTextModule as MediaAndTextModuleType } from "sanity/sanity.types";

export interface MediaAndTextModuleProps extends MediaAndTextModuleType {}
export const MediaAndTextModule: React.FC<MediaAndTextModuleProps> = ({
  title,
  cta,
  media,
}) => {
  return (
    <SectionWrapper>
      <Container>
        {title && (
          <Heading as="h3" size="xl" textAlign="center">
            {title}
          </Heading>
        )}
        <FlexGrid>
          <FlexGridColumn colSpan={{ base: 12, md: 6 }}>
            <PortableText />
            <DefaultButton {...cta!} />
          </FlexGridColumn>
          <FlexGridColumn colSpan={{ base: 12, md: 6 }}>
            <FeaturedMedia {...media!} />
          </FlexGridColumn>
        </FlexGrid>
      </Container>
    </SectionWrapper>
  );
};
