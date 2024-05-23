import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type Accordion = {
  __typename?: "Accordion";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  groups?: Maybe<Array<Maybe<AccordionGroup>>>;
};

export type AccordionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type AccordionGroup = {
  __typename?: "AccordionGroup";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  bodyRaw?: Maybe<Scalars["JSON"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type AccordionGroupFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AccordionGroupSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AccordionOrBlockOrCalloutOrGridOrImageWithProductHotspotsOrImagesOrInstagramOrProducts =

    | Accordion
    | Block
    | Callout
    | Grid
    | ImageWithProductHotspots
    | Images
    | Instagram
    | Products;

export type AccordionOrCalloutOrGridOrImageWithProductHotspotsOrImagesOrInstagramOrProducts =

    | Accordion
    | Callout
    | Grid
    | ImageWithProductHotspots
    | Images
    | Instagram
    | Products;

export type AccordionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  level?: Maybe<Scalars["Float"]["output"]>;
  listItem?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<Scalars["String"]["output"]>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CallToAction = {
  __typename?: "CallToAction";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  content?: Maybe<Array<Maybe<ImageOrProductWithVariant>>>;
  layout?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
  portableText?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CallToActionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  layout?: InputMaybe<StringFilter>;
  portableText?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CallToActionOrCalloutOrImageOrInstagram =
  | CallToAction
  | Callout
  | Image
  | Instagram;

export type CallToActionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  layout?: InputMaybe<SortOrder>;
  portableText?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Callout = {
  __typename?: "Callout";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type CalloutFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type CalloutSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type Collection = Document & {
  __typename?: "Collection";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  colorTheme?: Maybe<ColorTheme>;
  hero?: Maybe<Hero>;
  hidden?: Maybe<Scalars["String"]["output"]>;
  modules?: Maybe<Array<Maybe<CallToActionOrCalloutOrImageOrInstagram>>>;
  seo?: Maybe<Seo>;
  /** If disabled, page title will be displayed instead */
  showHero?: Maybe<Scalars["Boolean"]["output"]>;
  slugProxy?: Maybe<Scalars["String"]["output"]>;
  store?: Maybe<ShopifyCollection>;
  titleProxy?: Maybe<Scalars["String"]["output"]>;
  vector?: Maybe<Image>;
};

export type CollectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  colorTheme?: InputMaybe<ColorThemeFilter>;
  hero?: InputMaybe<HeroFilter>;
  hidden?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  showHero?: InputMaybe<BooleanFilter>;
  slugProxy?: InputMaybe<StringFilter>;
  store?: InputMaybe<ShopifyCollectionFilter>;
  titleProxy?: InputMaybe<StringFilter>;
  vector?: InputMaybe<ImageFilter>;
};

export type CollectionGroup = {
  __typename?: "CollectionGroup";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  collectionLinks?: Maybe<Array<Maybe<Collection>>>;
  /** Products from this collection will be listed */
  collectionProducts?: Maybe<Collection>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CollectionGroupFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  collectionProducts?: InputMaybe<CollectionFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CollectionGroupOrLinkExternalOrLinkInternal =
  | CollectionGroup
  | LinkExternal
  | LinkInternal;

export type CollectionGroupSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CollectionOrHomeOrPageOrProduct =
  | Collection
  | Home
  | Page
  | Product;

export type CollectionReference = {
  __typename?: "CollectionReference";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  collection?: Maybe<Collection>;
  /** Use Shopify collection image as background (if available) */
  showBackground?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CollectionReferenceFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  collection?: InputMaybe<CollectionFilter>;
  showBackground?: InputMaybe<BooleanFilter>;
};

export type CollectionReferenceSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  showBackground?: InputMaybe<SortOrder>;
};

export type CollectionRule = {
  __typename?: "CollectionRule";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  column?: Maybe<Scalars["String"]["output"]>;
  condition?: Maybe<Scalars["String"]["output"]>;
  relation?: Maybe<Scalars["String"]["output"]>;
};

export type CollectionRuleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  column?: InputMaybe<StringFilter>;
  condition?: InputMaybe<StringFilter>;
  relation?: InputMaybe<StringFilter>;
};

export type CollectionRuleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  column?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  relation?: InputMaybe<SortOrder>;
};

export type CollectionSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hero?: InputMaybe<HeroSorting>;
  hidden?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  showHero?: InputMaybe<SortOrder>;
  slugProxy?: InputMaybe<SortOrder>;
  store?: InputMaybe<ShopifyCollectionSorting>;
  titleProxy?: InputMaybe<SortOrder>;
  vector?: InputMaybe<ImageSorting>;
};

export type Color = {
  __typename?: "Color";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  alpha?: Maybe<Scalars["Float"]["output"]>;
  hex?: Maybe<Scalars["String"]["output"]>;
  hsl?: Maybe<HslaColor>;
  hsv?: Maybe<HsvaColor>;
  rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alpha?: InputMaybe<FloatFilter>;
  hex?: InputMaybe<StringFilter>;
  hsl?: InputMaybe<HslaColorFilter>;
  hsv?: InputMaybe<HsvaColorFilter>;
  rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alpha?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  hsl?: InputMaybe<HslaColorSorting>;
  hsv?: InputMaybe<HsvaColorSorting>;
  rgb?: InputMaybe<RgbaColorSorting>;
};

export type ColorTheme = Document & {
  __typename?: "ColorTheme";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  background?: Maybe<Color>;
  text?: Maybe<Color>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ColorThemeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  background?: InputMaybe<ColorFilter>;
  text?: InputMaybe<ColorFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ColorThemeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  background?: InputMaybe<ColorSorting>;
  text?: InputMaybe<ColorSorting>;
  title?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename?: "CrossDatasetReference";
  _dataset?: Maybe<Scalars["String"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  _projectId?: Maybe<Scalars["String"]["output"]>;
  _ref?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  _weak?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type CustomProductOptionColor = {
  __typename?: "CustomProductOptionColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  colors?: Maybe<Array<Maybe<CustomProductOptionColorObject>>>;
  /** Shopify product option name (case sensitive) */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CustomProductOptionColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CustomProductOptionColorObject = {
  __typename?: "CustomProductOptionColorObject";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  color?: Maybe<Color>;
  /** Shopify product option value (case sensitive) */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CustomProductOptionColorObjectFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  color?: InputMaybe<ColorFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CustomProductOptionColorObjectSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  color?: InputMaybe<ColorSorting>;
  title?: InputMaybe<SortOrder>;
};

export type CustomProductOptionColorOrCustomProductOptionSize =
  | CustomProductOptionColor
  | CustomProductOptionSize;

export type CustomProductOptionColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CustomProductOptionSize = {
  __typename?: "CustomProductOptionSize";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  sizes?: Maybe<Array<Maybe<CustomProductOptionSizeObject>>>;
  /** Shopify product option name (case sensitive) */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CustomProductOptionSizeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CustomProductOptionSizeObject = {
  __typename?: "CustomProductOptionSizeObject";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** In mm */
  height?: Maybe<Scalars["Float"]["output"]>;
  /** Shopify product option value (case sensitive) */
  title?: Maybe<Scalars["String"]["output"]>;
  /** In mm */
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type CustomProductOptionSizeObjectFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type CustomProductOptionSizeObjectSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type CustomProductOptionSizeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FooterSettings = {
  __typename?: "FooterSettings";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
  textRaw?: Maybe<Scalars["JSON"]["output"]>;
};

export type FooterSettingsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type FooterSettingsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  alt?: Maybe<Scalars["Float"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type Grid = {
  __typename?: "Grid";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  items?: Maybe<Array<Maybe<GridItem>>>;
};

export type GridFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type GridItem = {
  __typename?: "GridItem";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  bodyRaw?: Maybe<Scalars["JSON"]["output"]>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type GridItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type GridItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type GridSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Hero = {
  __typename?: "Hero";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  content?: Maybe<Array<Maybe<ImageWithProductHotspotsOrProductWithVariant>>>;
  description?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type HeroFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HeroSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Home = Document & {
  __typename?: "Home";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  hero?: Maybe<Hero>;
  modules?: Maybe<
    Array<
      Maybe<AccordionOrCalloutOrGridOrImageWithProductHotspotsOrImagesOrInstagramOrProducts>
    >
  >;
  seo?: Maybe<Seo>;
};

export type HomeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  hero?: InputMaybe<HeroFilter>;
  seo?: InputMaybe<SeoFilter>;
};

export type HomeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hero?: InputMaybe<HeroSorting>;
  seo?: InputMaybe<SeoSorting>;
};

export type HslaColor = {
  __typename?: "HslaColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  a?: Maybe<Scalars["Float"]["output"]>;
  h?: Maybe<Scalars["Float"]["output"]>;
  l?: Maybe<Scalars["Float"]["output"]>;
  s?: Maybe<Scalars["Float"]["output"]>;
};

export type HslaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  l?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  l?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
  __typename?: "HsvaColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  a?: Maybe<Scalars["Float"]["output"]>;
  h?: Maybe<Scalars["Float"]["output"]>;
  s?: Maybe<Scalars["Float"]["output"]>;
  v?: Maybe<Scalars["Float"]["output"]>;
};

export type HsvaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
  v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
  v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["ID"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["ID"]["input"]>;
  nin?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageCallToAction = {
  __typename?: "ImageCallToAction";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ImageCallToActionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageCallToActionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ImageFeature = {
  __typename?: "ImageFeature";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  callToAction?: Maybe<ImageCallToAction>;
  caption?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Image>;
  productHotspots?: Maybe<Array<Maybe<Spot>>>;
  productTags?: Maybe<Array<Maybe<ProductWithVariant>>>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export type ImageFeatureFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  callToAction?: InputMaybe<ImageCallToActionFilter>;
  caption?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type ImageFeatureSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  callToAction?: InputMaybe<ImageCallToActionSorting>;
  caption?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  variant?: InputMaybe<SortOrder>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageOrProductWithVariant = Image | ProductWithVariant;

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type ImageWithProductHotspots = {
  __typename?: "ImageWithProductHotspots";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Image>;
  productHotspots?: Maybe<Array<Maybe<Spot>>>;
  showHotspots?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ImageWithProductHotspotsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  showHotspots?: InputMaybe<BooleanFilter>;
};

export type ImageWithProductHotspotsOrProductWithVariant =
  | ImageWithProductHotspots
  | ProductWithVariant;

export type ImageWithProductHotspotsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  showHotspots?: InputMaybe<SortOrder>;
};

export type Images = {
  __typename?: "Images";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Display single image at full width (on larger breakpoints) */
  fullWidth?: Maybe<Scalars["Boolean"]["output"]>;
  imageFeatures?: Maybe<Array<Maybe<ImageFeature>>>;
  verticalAlign?: Maybe<Scalars["String"]["output"]>;
};

export type ImagesFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  fullWidth?: InputMaybe<BooleanFilter>;
  verticalAlign?: InputMaybe<StringFilter>;
};

export type ImagesSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  fullWidth?: InputMaybe<SortOrder>;
  verticalAlign?: InputMaybe<SortOrder>;
};

export type Instagram = {
  __typename?: "Instagram";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type InstagramFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type InstagramSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Inventory = {
  __typename?: "Inventory";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  management?: Maybe<Scalars["String"]["output"]>;
  policy?: Maybe<Scalars["String"]["output"]>;
};

export type InventoryFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  isAvailable?: InputMaybe<BooleanFilter>;
  management?: InputMaybe<StringFilter>;
  policy?: InputMaybe<StringFilter>;
};

export type InventorySorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  isAvailable?: InputMaybe<SortOrder>;
  management?: InputMaybe<SortOrder>;
  policy?: InputMaybe<SortOrder>;
};

export type LinkEmail = {
  __typename?: "LinkEmail";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
};

export type LinkEmailFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
};

export type LinkEmailSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
};

export type LinkExternal = {
  __typename?: "LinkExternal";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  newWindow?: Maybe<Scalars["Boolean"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type LinkExternalFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  newWindow?: InputMaybe<BooleanFilter>;
  url?: InputMaybe<StringFilter>;
};

export type LinkExternalOrLinkInternal = LinkExternal | LinkInternal;

export type LinkExternalSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  newWindow?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type LinkInternal = {
  __typename?: "LinkInternal";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  reference?: Maybe<CollectionOrHomeOrPageOrProduct>;
};

export type LinkInternalFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type LinkInternalSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type LinkProduct = {
  __typename?: "LinkProduct";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  linkAction?: Maybe<Scalars["String"]["output"]>;
  productWithVariant?: Maybe<ProductWithVariant>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
};

export type LinkProductFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  linkAction?: InputMaybe<StringFilter>;
  productWithVariant?: InputMaybe<ProductWithVariantFilter>;
  quantity?: InputMaybe<FloatFilter>;
};

export type LinkProductSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  linkAction?: InputMaybe<SortOrder>;
  productWithVariant?: InputMaybe<ProductWithVariantSorting>;
  quantity?: InputMaybe<SortOrder>;
};

export type MediaTag = Document & {
  __typename?: "MediaTag";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  name?: Maybe<Slug>;
};

export type MediaTagFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<SlugFilter>;
};

export type MediaTagSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SlugSorting>;
};

export type Menu = {
  __typename?: "Menu";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  links?: Maybe<Array<Maybe<CollectionGroupOrLinkExternalOrLinkInternal>>>;
};

export type MenuFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type MenuSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type NotFoundPage = {
  __typename?: "NotFoundPage";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  body?: Maybe<Scalars["String"]["output"]>;
  /** Collection products displayed on this page */
  collection?: Maybe<Collection>;
  colorTheme?: Maybe<ColorTheme>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type NotFoundPageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  collection?: InputMaybe<CollectionFilter>;
  colorTheme?: InputMaybe<ColorThemeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type NotFoundPageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Option = {
  __typename?: "Option";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type OptionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type OptionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename?: "Page";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  bodyRaw?: Maybe<Scalars["JSON"]["output"]>;
  colorTheme?: Maybe<ColorTheme>;
  hero?: Maybe<Hero>;
  seo?: Maybe<Seo>;
  /** If disabled, page title will be displayed instead */
  showHero?: Maybe<Scalars["Boolean"]["output"]>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  colorTheme?: InputMaybe<ColorThemeFilter>;
  hero?: InputMaybe<HeroFilter>;
  seo?: InputMaybe<SeoFilter>;
  showHero?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hero?: InputMaybe<HeroSorting>;
  seo?: InputMaybe<SeoSorting>;
  showHero?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type PriceRange = {
  __typename?: "PriceRange";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  maxVariantPrice?: Maybe<Scalars["Float"]["output"]>;
  minVariantPrice?: Maybe<Scalars["Float"]["output"]>;
};

export type PriceRangeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  maxVariantPrice?: InputMaybe<FloatFilter>;
  minVariantPrice?: InputMaybe<FloatFilter>;
};

export type PriceRangeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  maxVariantPrice?: InputMaybe<SortOrder>;
  minVariantPrice?: InputMaybe<SortOrder>;
};

export type Product = Document & {
  __typename?: "Product";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  bodyRaw?: Maybe<Scalars["JSON"]["output"]>;
  colorTheme?: Maybe<ColorTheme>;
  hidden?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slugProxy?: Maybe<Scalars["String"]["output"]>;
  store?: Maybe<ShopifyProduct>;
  titleProxy?: Maybe<Scalars["String"]["output"]>;
};

export type ProductFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  colorTheme?: InputMaybe<ColorThemeFilter>;
  hidden?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slugProxy?: InputMaybe<StringFilter>;
  store?: InputMaybe<ShopifyProductFilter>;
  titleProxy?: InputMaybe<StringFilter>;
};

export type ProductReference = {
  __typename?: "ProductReference";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  productWithVariant?: Maybe<ProductWithVariant>;
};

export type ProductReferenceFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  productWithVariant?: InputMaybe<ProductWithVariantFilter>;
};

export type ProductReferenceSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  productWithVariant?: InputMaybe<ProductWithVariantSorting>;
};

export type ProductSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hidden?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slugProxy?: InputMaybe<SortOrder>;
  store?: InputMaybe<ShopifyProductSorting>;
  titleProxy?: InputMaybe<SortOrder>;
};

export type ProductVariant = Document & {
  __typename?: "ProductVariant";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  hidden?: Maybe<Scalars["String"]["output"]>;
  store?: Maybe<ShopifyProductVariant>;
  titleProxy?: Maybe<Scalars["String"]["output"]>;
};

export type ProductVariantFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  hidden?: InputMaybe<StringFilter>;
  store?: InputMaybe<ShopifyProductVariantFilter>;
  titleProxy?: InputMaybe<StringFilter>;
};

export type ProductVariantSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  hidden?: InputMaybe<SortOrder>;
  store?: InputMaybe<ShopifyProductVariantSorting>;
  titleProxy?: InputMaybe<SortOrder>;
};

export type ProductWithVariant = {
  __typename?: "ProductWithVariant";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Product>;
  /** First variant will be selected if left empty */
  variant?: Maybe<ProductVariant>;
};

export type ProductWithVariantFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductFilter>;
  variant?: InputMaybe<ProductVariantFilter>;
};

export type ProductWithVariantSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Products = {
  __typename?: "Products";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  layout?: Maybe<Scalars["String"]["output"]>;
  products?: Maybe<Array<Maybe<ProductReference>>>;
};

export type ProductsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  layout?: InputMaybe<StringFilter>;
};

export type ProductsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  layout?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
  __typename?: "RgbaColor";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  a?: Maybe<Scalars["Float"]["output"]>;
  b?: Maybe<Scalars["Float"]["output"]>;
  g?: Maybe<Scalars["Float"]["output"]>;
  r?: Maybe<Scalars["Float"]["output"]>;
};

export type RgbaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<FloatFilter>;
  g?: InputMaybe<FloatFilter>;
  r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  b?: InputMaybe<SortOrder>;
  g?: InputMaybe<SortOrder>;
  r?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Collection?: Maybe<Collection>;
  ColorTheme?: Maybe<ColorTheme>;
  Document?: Maybe<Document>;
  Home?: Maybe<Home>;
  MediaTag?: Maybe<MediaTag>;
  Page?: Maybe<Page>;
  Product?: Maybe<Product>;
  ProductVariant?: Maybe<ProductVariant>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Settings?: Maybe<Settings>;
  allCollection: Array<Collection>;
  allColorTheme: Array<ColorTheme>;
  allDocument: Array<Document>;
  allHome: Array<Home>;
  allMediaTag: Array<MediaTag>;
  allPage: Array<Page>;
  allProduct: Array<Product>;
  allProductVariant: Array<ProductVariant>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSettings: Array<Settings>;
};

export type RootQueryCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryColorThemeArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryHomeArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryMediaTagArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryPageArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryProductArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryProductVariantArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySettingsArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryAllCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CollectionSorting>>;
  where?: InputMaybe<CollectionFilter>;
};

export type RootQueryAllColorThemeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ColorThemeSorting>>;
  where?: InputMaybe<ColorThemeFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllHomeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<HomeSorting>>;
  where?: InputMaybe<HomeFilter>;
};

export type RootQueryAllMediaTagArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<MediaTagSorting>>;
  where?: InputMaybe<MediaTagFilter>;
};

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};

export type RootQueryAllProductArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ProductSorting>>;
  where?: InputMaybe<ProductFilter>;
};

export type RootQueryAllProductVariantArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ProductVariantSorting>>;
  where?: InputMaybe<ProductVariantFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSettingsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SettingsSorting>>;
  where?: InputMaybe<SettingsFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]["output"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]["output"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  uploadId?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  uploadId?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  bottom?: Maybe<Scalars["Float"]["output"]>;
  left?: Maybe<Scalars["Float"]["output"]>;
  right?: Maybe<Scalars["Float"]["output"]>;
  top?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  aspectRatio?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
  x?: Maybe<Scalars["Float"]["output"]>;
  y?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  blurHash?: Maybe<Scalars["String"]["output"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]["output"]>;
  isOpaque?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]["output"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  background?: Maybe<Scalars["String"]["output"]>;
  foreground?: Maybe<Scalars["String"]["output"]>;
  population?: Maybe<Scalars["Float"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Seo = {
  __typename?: "Seo";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Settings = Document & {
  __typename?: "Settings";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  customProductOptions?: Maybe<
    Array<Maybe<CustomProductOptionColorOrCustomProductOptionSize>>
  >;
  footer?: Maybe<FooterSettings>;
  menu?: Maybe<Menu>;
  notFoundPage?: Maybe<NotFoundPage>;
  seo?: Maybe<Seo>;
};

export type SettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterSettingsFilter>;
  menu?: InputMaybe<MenuFilter>;
  notFoundPage?: InputMaybe<NotFoundPageFilter>;
  seo?: InputMaybe<SeoFilter>;
};

export type SettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  footer?: InputMaybe<FooterSettingsSorting>;
  menu?: InputMaybe<MenuSorting>;
  notFoundPage?: InputMaybe<NotFoundPageSorting>;
  seo?: InputMaybe<SeoSorting>;
};

export type ShopifyCollection = {
  __typename?: "ShopifyCollection";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  descriptionHtml?: Maybe<Scalars["String"]["output"]>;
  /** Require any condition if true, otherwise require all conditions */
  disjunctive?: Maybe<Scalars["Boolean"]["output"]>;
  /** Shopify Collection GID */
  gid?: Maybe<Scalars["String"]["output"]>;
  /** Shopify Collection ID */
  id?: Maybe<Scalars["Float"]["output"]>;
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isDeleted?: Maybe<Scalars["Boolean"]["output"]>;
  rules?: Maybe<Array<Maybe<CollectionRule>>>;
  slug?: Maybe<Slug>;
  sortOrder?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ShopifyCollectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<StringFilter>;
  descriptionHtml?: InputMaybe<StringFilter>;
  disjunctive?: InputMaybe<BooleanFilter>;
  gid?: InputMaybe<StringFilter>;
  id?: InputMaybe<FloatFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  sortOrder?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<StringFilter>;
};

export type ShopifyCollectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  descriptionHtml?: InputMaybe<SortOrder>;
  disjunctive?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  sortOrder?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShopifyProduct = {
  __typename?: "ShopifyProduct";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  descriptionHtml?: Maybe<Scalars["String"]["output"]>;
  /** Shopify Product GID */
  gid?: Maybe<Scalars["String"]["output"]>;
  /** Shopify Product ID */
  id?: Maybe<Scalars["Float"]["output"]>;
  isDeleted?: Maybe<Scalars["Boolean"]["output"]>;
  options?: Maybe<Array<Maybe<Option>>>;
  /** Image displayed in both cart and checkout */
  previewImageUrl?: Maybe<Scalars["String"]["output"]>;
  priceRange?: Maybe<PriceRange>;
  productType?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Slug>;
  status?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Scalars["String"]["output"]>;
  /** Title displayed in both cart and checkout */
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
  vendor?: Maybe<Scalars["String"]["output"]>;
};

export type ShopifyProductFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<StringFilter>;
  descriptionHtml?: InputMaybe<StringFilter>;
  gid?: InputMaybe<StringFilter>;
  id?: InputMaybe<FloatFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  previewImageUrl?: InputMaybe<StringFilter>;
  priceRange?: InputMaybe<PriceRangeFilter>;
  productType?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<StringFilter>;
  vendor?: InputMaybe<StringFilter>;
};

export type ShopifyProductSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  descriptionHtml?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  previewImageUrl?: InputMaybe<SortOrder>;
  priceRange?: InputMaybe<PriceRangeSorting>;
  productType?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vendor?: InputMaybe<SortOrder>;
};

export type ShopifyProductVariant = {
  __typename?: "ShopifyProductVariant";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  compareAtPrice?: Maybe<Scalars["Float"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  /** Shopify Product Variant GID */
  gid?: Maybe<Scalars["String"]["output"]>;
  /** Shopify Product Variant ID */
  id?: Maybe<Scalars["Float"]["output"]>;
  inventory?: Maybe<Inventory>;
  isDeleted?: Maybe<Scalars["Boolean"]["output"]>;
  option1?: Maybe<Scalars["String"]["output"]>;
  option2?: Maybe<Scalars["String"]["output"]>;
  option3?: Maybe<Scalars["String"]["output"]>;
  /** Image displayed in both cart and checkout */
  previewImageUrl?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  productGid?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["Float"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ShopifyProductVariantFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  compareAtPrice?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<StringFilter>;
  gid?: InputMaybe<StringFilter>;
  id?: InputMaybe<FloatFilter>;
  inventory?: InputMaybe<InventoryFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  option1?: InputMaybe<StringFilter>;
  option2?: InputMaybe<StringFilter>;
  option3?: InputMaybe<StringFilter>;
  previewImageUrl?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  productGid?: InputMaybe<StringFilter>;
  productId?: InputMaybe<FloatFilter>;
  sku?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<StringFilter>;
};

export type ShopifyProductVariantSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  compareAtPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inventory?: InputMaybe<InventorySorting>;
  isDeleted?: InputMaybe<SortOrder>;
  option1?: InputMaybe<SortOrder>;
  option2?: InputMaybe<SortOrder>;
  option3?: InputMaybe<SortOrder>;
  previewImageUrl?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productGid?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  current?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type Spot = {
  __typename?: "Spot";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  productWithVariant?: Maybe<ProductWithVariant>;
  x?: Maybe<Scalars["Float"]["output"]>;
  y?: Maybe<Scalars["Float"]["output"]>;
};

export type SpotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  productWithVariant?: InputMaybe<ProductWithVariantFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SpotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  productWithVariant?: InputMaybe<ProductWithVariantSorting>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type DemoProductsQueryVariables = Exact<{ [key: string]: never }>;

export type DemoProductsQuery = {
  __typename?: "RootQuery";
  allProduct: Array<{
    __typename?: "Product";
    store?: {
      __typename?: "ShopifyProduct";
      status?: string | null;
      title?: string | null;
    } | null;
  }>;
};

export const DemoProductsDocument = gql`
  query demoProducts {
    allProduct(where: { store: { status: { eq: "active" } } }) {
      store {
        status
        title
      }
    }
  }
`;

/**
 * __useDemoProductsQuery__
 *
 * To run a query within a React component, call `useDemoProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDemoProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemoProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDemoProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DemoProductsQuery,
    DemoProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DemoProductsQuery, DemoProductsQueryVariables>(
    DemoProductsDocument,
    options,
  );
}
export function useDemoProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DemoProductsQuery,
    DemoProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DemoProductsQuery, DemoProductsQueryVariables>(
    DemoProductsDocument,
    options,
  );
}
export function useDemoProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    DemoProductsQuery,
    DemoProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<DemoProductsQuery, DemoProductsQueryVariables>(
    DemoProductsDocument,
    options,
  );
}
export type DemoProductsQueryHookResult = ReturnType<
  typeof useDemoProductsQuery
>;
export type DemoProductsLazyQueryHookResult = ReturnType<
  typeof useDemoProductsLazyQuery
>;
export type DemoProductsSuspenseQueryHookResult = ReturnType<
  typeof useDemoProductsSuspenseQuery
>;
export type DemoProductsQueryResult = Apollo.QueryResult<
  DemoProductsQuery,
  DemoProductsQueryVariables
>;
