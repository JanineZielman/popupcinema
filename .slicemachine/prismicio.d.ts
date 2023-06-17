// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Archive documents */
interface ArchiveDocumentData {
    /**
     * Title field in *Archive*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: archive.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Archive*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: archive.text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Archive document from Prismic
 *
 * - **API ID**: `archive`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArchiveDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArchiveDocumentData>, "archive", Lang>;
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * Title field in *Category*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Category*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: category.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<CategoryDocumentDataSlicesSlice>;
}
/**
 * Slice for *Category → Slice Zone*
 *
 */
type CategoryDocumentDataSlicesSlice = TextBlockSlice;
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Event documents */
interface EventDocumentData {
    /**
     * Title field in *Event*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: event.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Date field in *Event*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: event.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * End Date field in *Event*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Only fill in if multiple days
     * - **API ID Path**: event.end_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    end_date: prismicT.DateField;
    /**
     * Time field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: 20:00
     * - **API ID Path**: event.time
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    time: prismicT.KeyTextField;
    /**
     * Location field in *Event*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: event.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    location: prismicT.RelationField<"location">;
    /**
     * Category field in *Event*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: event.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
    /**
     * Slice Zone field in *Event*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: event.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<EventDocumentDataSlicesSlice>;
}
/**
 * Slice for *Event → Slice Zone*
 *
 */
type EventDocumentDataSlicesSlice = EventInfoSlice | TextBlockSlice | EmbedSlice | ImageSlice;
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
/** Content for Location documents */
interface LocationDocumentData {
    /**
     * Title field in *Location*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: location.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Location document from Prismic
 *
 * - **API ID**: `location`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LocationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<LocationDocumentData>, "location", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for News Item documents */
interface NewsItemDocumentData {
    /**
     * Title field in *News Item*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Date field in *News Item*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Image field in *News Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"previewImage">;
    /**
     * Slice Zone field in *News Item*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NewsItemDocumentDataSlicesSlice>;
}
/**
 * Slice for *News Item → Slice Zone*
 *
 */
type NewsItemDocumentDataSlicesSlice = ImageSlice | TextBlockSlice;
/**
 * News Item document from Prismic
 *
 * - **API ID**: `news_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsItemDocumentData>, "news_item", Lang>;
/** Content for News documents */
interface NewsDocumentData {
    /**
     * Title field in *News*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: news.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = TextBlockSlice | ImageSlice | ImageTextSlice | PartnersSlice | NewsletterSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site
     * - **API ID Path**: settings.siteTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    siteTitle: prismicT.TitleField;
    /**
     * Logo field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Image field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Translations field in *Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.translations[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    translations: prismicT.GroupField<Simplify<SettingsDocumentDataTranslationsItem>>;
    /**
     * Slice Zone field in *Settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SettingsDocumentDataSlicesSlice>;
}
/**
 * Item in Settings → Translations
 *
 */
export interface SettingsDocumentDataTranslationsItem {
    /**
     * Show all field in *Settings → Translations*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.translations[].show_all
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    show_all: prismicT.KeyTextField;
    /**
     * Locations field in *Settings → Translations*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.translations[].locations
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    locations: prismicT.KeyTextField;
    /**
     * Categories field in *Settings → Translations*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.translations[].categories
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    categories: prismicT.KeyTextField;
    /**
     * Archive field in *Settings → Translations*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.translations[].archive
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    archive: prismicT.KeyTextField;
}
/**
 * Slice for *Settings → Slice Zone*
 *
 */
type SettingsDocumentDataSlicesSlice = LogoAnimationSlice | SocialMediaSlice;
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = ArchiveDocument | CategoryDocument | EventDocument | LocationDocument | NavigationDocument | NewsItemDocument | NewsDocument | PageDocument | SettingsDocument;
/**
 * Primary content in Embed → Primary
 *
 */
interface EmbedSliceDefaultPrimary {
    /**
     * Embed field in *Embed → Primary*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: embed.primary.embed
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    embed: prismicT.EmbedField;
}
/**
 * Default variation for Embed Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Embed`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<EmbedSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Embed*
 *
 */
type EmbedSliceVariation = EmbedSliceDefault;
/**
 * Embed Shared Slice
 *
 * - **API ID**: `embed`
 * - **Description**: `Embed`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSlice = prismicT.SharedSlice<"embed", EmbedSliceVariation>;
/**
 * Item in EventInfo → Items
 *
 */
export interface EventInfoSliceDefaultItem {
    /**
     * Label field in *EventInfo → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_info.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Value field in *EventInfo → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_info.items[].value
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    value: prismicT.KeyTextField;
}
/**
 * Default variation for EventInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: `EventInfo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventInfoSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<EventInfoSliceDefaultItem>>;
/**
 * Slice variation for *EventInfo*
 *
 */
type EventInfoSliceVariation = EventInfoSliceDefault;
/**
 * EventInfo Shared Slice
 *
 * - **API ID**: `event_info`
 * - **Description**: `EventInfo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventInfoSlice = prismicT.SharedSlice<"event_info", EventInfoSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in ImageText → Primary
 *
 */
interface ImageTextSliceDefaultPrimary {
    /**
     * Title field in *ImageText → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_text.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *ImageText → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Item in ImageText → Items
 *
 */
export interface ImageTextSliceDefaultItem {
    /**
     * Image field in *ImageText → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *ImageText → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *ImageText → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for ImageText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageTextSliceDefaultPrimary>, Simplify<ImageTextSliceDefaultItem>>;
/**
 * Slice variation for *ImageText*
 *
 */
type ImageTextSliceVariation = ImageTextSliceDefault;
/**
 * ImageText Shared Slice
 *
 * - **API ID**: `image_text`
 * - **Description**: `ImageText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTextSlice = prismicT.SharedSlice<"image_text", ImageTextSliceVariation>;
/**
 * Primary content in LogoAnimation → Primary
 *
 */
interface LogoAnimationSliceDefaultPrimary {
    /**
     * Background Color field in *LogoAnimation → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_animation.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Text Color field in *LogoAnimation → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_animation.primary.text_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    text_color: prismicT.ColorField;
}
/**
 * Item in LogoAnimation → Items
 *
 */
export interface LogoAnimationSliceDefaultItem {
    /**
     * Text field in *LogoAnimation → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_animation.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Default variation for LogoAnimation Slice
 *
 * - **API ID**: `default`
 * - **Description**: `LogoAnimation`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoAnimationSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LogoAnimationSliceDefaultPrimary>, Simplify<LogoAnimationSliceDefaultItem>>;
/**
 * Slice variation for *LogoAnimation*
 *
 */
type LogoAnimationSliceVariation = LogoAnimationSliceDefault;
/**
 * LogoAnimation Shared Slice
 *
 * - **API ID**: `logo_animation`
 * - **Description**: `LogoAnimation`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoAnimationSlice = prismicT.SharedSlice<"logo_animation", LogoAnimationSliceVariation>;
/**
 * Primary content in Newsletter → Primary
 *
 */
interface NewsletterSliceDefaultPrimary {
    /**
     * Title field in *Newsletter → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: newsletter.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Newsletter → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: newsletter.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Button Text field in *Newsletter → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: newsletter.primary.button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_text: prismicT.KeyTextField;
}
/**
 * Default variation for Newsletter Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Newsletter`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsletterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NewsletterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Newsletter*
 *
 */
type NewsletterSliceVariation = NewsletterSliceDefault;
/**
 * Newsletter Shared Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: `Newsletter`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsletterSlice = prismicT.SharedSlice<"newsletter", NewsletterSliceVariation>;
/**
 * Primary content in Partners → Primary
 *
 */
interface PartnersSliceDefaultPrimary {
    /**
     * Title field in *Partners → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: partners.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Partners → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Item in Partners → Items
 *
 */
export interface PartnersSliceDefaultItem {
    /**
     * Image field in *Partners → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Partners → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Text field in *Partners → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Partners Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PartnersSliceDefaultPrimary>, Simplify<PartnersSliceDefaultItem>>;
/**
 * Slice variation for *Partners*
 *
 */
type PartnersSliceVariation = PartnersSliceDefault;
/**
 * Partners Shared Slice
 *
 * - **API ID**: `partners`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSlice = prismicT.SharedSlice<"partners", PartnersSliceVariation>;
/**
 * Item in SocialMedia → Items
 *
 */
export interface SocialMediaSliceDefaultItem {
    /**
     * Icon field in *SocialMedia → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social_media.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
    /**
     * Link field in *SocialMedia → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: social_media.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for SocialMedia Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SocialMedia`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialMediaSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<SocialMediaSliceDefaultItem>>;
/**
 * Slice variation for *SocialMedia*
 *
 */
type SocialMediaSliceVariation = SocialMediaSliceDefault;
/**
 * SocialMedia Shared Slice
 *
 * - **API ID**: `social_media`
 * - **Description**: `SocialMedia`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialMediaSlice = prismicT.SharedSlice<"social_media", SocialMediaSliceVariation>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * Title field in *TextBlock → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: text_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Quote field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.RichTextField;
    /**
     * Text field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArchiveDocumentData, ArchiveDocument, CategoryDocumentData, CategoryDocumentDataSlicesSlice, CategoryDocument, EventDocumentData, EventDocumentDataSlicesSlice, EventDocument, LocationDocumentData, LocationDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, NewsItemDocumentData, NewsItemDocumentDataSlicesSlice, NewsItemDocument, NewsDocumentData, NewsDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocumentDataTranslationsItem, SettingsDocumentDataSlicesSlice, SettingsDocument, AllDocumentTypes, EmbedSliceDefaultPrimary, EmbedSliceDefault, EmbedSliceVariation, EmbedSlice, EventInfoSliceDefaultItem, EventInfoSliceDefault, EventInfoSliceVariation, EventInfoSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceVariation, ImageSlice, ImageTextSliceDefaultPrimary, ImageTextSliceDefaultItem, ImageTextSliceDefault, ImageTextSliceVariation, ImageTextSlice, LogoAnimationSliceDefaultPrimary, LogoAnimationSliceDefaultItem, LogoAnimationSliceDefault, LogoAnimationSliceVariation, LogoAnimationSlice, NewsletterSliceDefaultPrimary, NewsletterSliceDefault, NewsletterSliceVariation, NewsletterSlice, PartnersSliceDefaultPrimary, PartnersSliceDefaultItem, PartnersSliceDefault, PartnersSliceVariation, PartnersSlice, SocialMediaSliceDefaultItem, SocialMediaSliceDefault, SocialMediaSliceVariation, SocialMediaSlice, TextBlockSliceDefaultPrimary, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice };
    }
}
