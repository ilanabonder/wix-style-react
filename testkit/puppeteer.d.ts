/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/puppeteer-typescript.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import {Page} from 'puppeteer';
import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';

type PuppeteerTestkitFactory<T> = (
  params: PuppeteerTestkitParams
) => Promise<T>;

type PuppeteerUniTestkitFactory<T extends BaseUniDriver> = (
  params: PuppeteerTestkitParams
) => Promise<T>;

interface PuppeteerTestkitParams {
  dataHook: string;
  page: Page;
}

type DeprecatedPuppeteerTestkit = any;

import {TooltipPuppeteerDriver} from '../src/Tooltip/Tooltip.puppeteer.driver';
export const tooltipTestkitFactory: PuppeteerTestkitFactory<TooltipPuppeteerDriver>;
import {TooltipUniDriver} from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';
export const TooltipTestkit: PuppeteerUniTestkitFactory<TooltipUniDriver>;

import {AccordionUniDriver} from '../src/Accordion/Accordion.uni.driver';
export const accordionTestkitFactory: PuppeteerUniTestkitFactory<AccordionUniDriver>;
import {AddItemUniDriver} from '../src/AddItem/AddItem.uni.driver';
export const addItemTestkitFactory: PuppeteerUniTestkitFactory<AddItemUniDriver>;
import {AutoCompleteUniDriver} from '../src/AutoComplete/AutoComplete.uni.driver';
export const autoCompleteTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteUniDriver>;
import AvatarUniDriver from '../src/Avatar/Avatar.uni.driver';
export const avatarTestkitFactory: PuppeteerUniTestkitFactory<AvatarUniDriver>;
import {BadgeUniDriver} from '../src/Badge/Badge.uni.driver';
export const badgeTestkitFactory: PuppeteerUniTestkitFactory<BadgeUniDriver>;
import {BadgeSelectUniDriver} from '../src/BadgeSelect/BadgeSelect.uni.driver';
export const badgeSelectTestkitFactory: PuppeteerUniTestkitFactory<BadgeSelectUniDriver>;
import {BoxUniDriver} from '../src/Box/Box.uni.driver';
export const boxTestkitFactory: PuppeteerUniTestkitFactory<BoxUniDriver>;
import {BreadcrumbsUniDriver} from '../src/Breadcrumbs/Breadcrumbs.uni.driver';
export const breadcrumbsTestkitFactory: PuppeteerUniTestkitFactory<BreadcrumbsUniDriver>;
import {ButtonUniDriver} from '../src/Button/Button.uni.driver';
export const buttonTestkitFactory: PuppeteerUniTestkitFactory<ButtonUniDriver>;
import {CalendarUniDriver} from '../src/Calendar/Calendar.uni.driver';
export const calendarTestkitFactory: PuppeteerUniTestkitFactory<CalendarUniDriver>;
import {CalendarPanelUniDriver} from '../src/CalendarPanel/CalendarPanel.uni.driver';
export const calendarPanelTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelUniDriver>;
import {CalendarPanelFooterUniDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
export const calendarPanelFooterTestkitFactory: PuppeteerUniTestkitFactory<CalendarPanelFooterUniDriver>;
import {CardGalleryItemUniDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
export const cardGalleryItemTestkitFactory: PuppeteerUniTestkitFactory<CardGalleryItemUniDriver>;
import {CarouselUniDriver} from '../src/Carousel/Carousel.uni.driver';
export const carouselTestkitFactory: PuppeteerUniTestkitFactory<CarouselUniDriver>;
import {CheckboxUniDriver} from '../src/Checkbox/Checkbox.uni.driver';
export const checkboxTestkitFactory: PuppeteerUniTestkitFactory<CheckboxUniDriver>;
import {CircularProgressBarUniDriver} from '../src/CircularProgressBar/CircularProgressBar.uni.driver';
export const circularProgressBarTestkitFactory: PuppeteerUniTestkitFactory<CircularProgressBarUniDriver>;
import {CloseButtonUniDriver} from '../src/CloseButton/CloseButton.uni.driver';
export const closeButtonTestkitFactory: PuppeteerUniTestkitFactory<CloseButtonUniDriver>;
import {ColorInputUniDriver} from '../src/ColorInput/ColorInput.uni.driver';
export const colorInputTestkitFactory: PuppeteerUniTestkitFactory<ColorInputUniDriver>;
import {ColorPickerUniDriver} from '../src/ColorPicker/ColorPicker.uni.driver';
export const colorPickerTestkitFactory: PuppeteerUniTestkitFactory<ColorPickerUniDriver>;
import {ContactItemBuilderUniDriver} from '../src/ContactItemBuilder/ContactItemBuilder.uni.driver';
export const contactItemBuilderTestkitFactory: PuppeteerUniTestkitFactory<ContactItemBuilderUniDriver>;
import {CounterBadgeUniDriver} from '../src/CounterBadge/CounterBadge.uni.driver';
export const counterBadgeTestkitFactory: PuppeteerUniTestkitFactory<CounterBadgeUniDriver>;
import {DateInputUniDriver} from '../src/DateInput/DateInput.uni.driver';
export const dateInputTestkitFactory: PuppeteerUniTestkitFactory<DateInputUniDriver>;
import {DropdownUniDriver} from '../src/Dropdown/Dropdown.uni.driver';
export const dropdownTestkitFactory: PuppeteerUniTestkitFactory<DropdownUniDriver>;
import {DropdownBaseUniDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
export const dropdownBaseTestkitFactory: PuppeteerUniTestkitFactory<DropdownBaseUniDriver>;
import {DropdownLayoutUniDriver} from '../src/DropdownLayout/DropdownLayout.uni.driver';
export const dropdownLayoutTestkitFactory: PuppeteerUniTestkitFactory<DropdownLayoutUniDriver>;
import {EditableSelectorUniDriver} from '../src/EditableSelector/EditableSelector.uni.driver';
export const editableSelectorTestkitFactory: PuppeteerUniTestkitFactory<EditableSelectorUniDriver>;
import {EditableTitleUniDriver} from '../src/EditableTitle/EditableTitle.uni.driver';
export const editableTitleTestkitFactory: PuppeteerUniTestkitFactory<EditableTitleUniDriver>;
import {EmptyStateUniDriver} from '../src/EmptyState/EmptyState.uni.driver';
export const emptyStateTestkitFactory: PuppeteerUniTestkitFactory<EmptyStateUniDriver>;
import {FilePickerUniDriver} from '../src/FilePicker/FilePicker.uni.driver';
export const filePickerTestkitFactory: PuppeteerUniTestkitFactory<FilePickerUniDriver>;
import {FloatingNotificationUniDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
export const floatingNotificationTestkitFactory: PuppeteerUniTestkitFactory<FloatingNotificationUniDriver>;
import {FormFieldPuppeteerDriver} from '../src/FormField/FormField.puppeteer.driver';
export const formFieldTestkitFactory: PuppeteerTestkitFactory<FormFieldPuppeteerDriver>;
import {GenericModalLayoutUniDriver} from '../src/GenericModalLayout/GenericModalLayout.uni.driver';
export const genericModalLayoutTestkitFactory: PuppeteerUniTestkitFactory<GenericModalLayoutUniDriver>;
import {GooglePreviewUniDriver} from '../src/GooglePreview/GooglePreview.uni.driver';
export const googlePreviewTestkitFactory: PuppeteerUniTestkitFactory<GooglePreviewUniDriver>;
import {HeadingPuppeteerDriver} from '../src/Heading/Heading.puppeteer.driver';
export const headingTestkitFactory: PuppeteerTestkitFactory<HeadingPuppeteerDriver>;
import {IconButtonUniDriver} from '../src/IconButton/IconButton.uni.driver';
export const iconButtonTestkitFactory: PuppeteerUniTestkitFactory<IconButtonUniDriver>;
import {ToggleButtonUniDriver} from '../src/ToggleButton/ToggleButton.uni.driver';
export const toggleButtonTestkitFactory: PuppeteerUniTestkitFactory<ToggleButtonUniDriver>;
import {ImageViewerUniDriver} from '../src/ImageViewer/ImageViewer.uni.driver';
export const imageViewerTestkitFactory: PuppeteerUniTestkitFactory<ImageViewerUniDriver>;
import {InputUniDriver} from '../src/Input/Input.uni.driver';
export const inputTestkitFactory: PuppeteerUniTestkitFactory<InputUniDriver>;
import {InputAreaUniDriver} from '../src/InputArea/InputArea.uni.driver';
export const inputAreaTestkitFactory: PuppeteerUniTestkitFactory<InputAreaUniDriver>;
import {InputWithOptionsUniDriver} from '../src/InputWithOptions/InputWithOptions.uni.driver';
export const inputWithOptionsTestkitFactory: PuppeteerUniTestkitFactory<InputWithOptionsUniDriver>;
import {LinearProgressBarUniDriver} from '../src/LinearProgressBar/LinearProgressBar.uni.driver';
export const linearProgressBarTestkitFactory: PuppeteerUniTestkitFactory<LinearProgressBarUniDriver>;
import {ListItemActionUniDriver} from '../src/ListItemAction/ListItemAction.uni.driver';
export const ListItemActionTestkitFactory: PuppeteerUniTestkitFactory<ListItemActionUniDriver>;
import {LoaderUniDriver} from '../src/Loader/Loader.uni.driver';
export const loaderTestkitFactory: PuppeteerUniTestkitFactory<LoaderUniDriver>;
import {ModalUniDriver} from '../src/Modal/Modal.uni.driver';
export const modalTestkitFactory: PuppeteerUniTestkitFactory<ModalUniDriver>;
import {MultiSelectUniDriver} from '../src/MultiSelect/MultiSelect.uni.driver';
export const multiSelectTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectUniDriver>;
import {MultiSelectCheckboxUniDriver} from '../src/MultiSelectCheckbox/MultiSelectCheckbox.uni.driver';
export const multiSelectCheckboxTestkitFactory: PuppeteerUniTestkitFactory<MultiSelectCheckboxUniDriver>;
import {NoBorderInputPuppeteerDriver} from '../src/NoBorderInput/NoBorderInput.puppeteer.driver';
export const noBorderInputTestkitFactory: PuppeteerTestkitFactory<NoBorderInputPuppeteerDriver>;
import {NotificationUniDriver} from '../src/Notification/Notification.uni.driver';
export const notificationTestkitFactory: PuppeteerUniTestkitFactory<NotificationUniDriver>;
import {NumberInputUniDriver} from '../src/NumberInput/NumberInput.uni.driver';
export const numberInputTestkitFactory: PuppeteerUniTestkitFactory<NumberInputUniDriver>;
import {PageUniDriver} from '../src/Page/Page.uni.driver';
export const pageTestkitFactory: PuppeteerUniTestkitFactory<PageUniDriver>;
import {PageHeaderUniDriver} from '../src/PageHeader/PageHeader.uni.driver';
export const pageHeaderTestkitFactory: PuppeteerUniTestkitFactory<PageHeaderUniDriver>;
import {PopoverUniDriver} from '../src/Popover/Popover.uni.driver';
export const popoverTestkitFactory: PuppeteerUniTestkitFactory<PopoverUniDriver>;
import {ProportionUniDriver} from '../src/Proportion/Proportion.uni.driver';
export const proportionTestkitFactory: PuppeteerUniTestkitFactory<ProportionUniDriver>;
import {RichTextInputAreaUniDriver} from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
export const richTextInputAreaTestkitFactory: PuppeteerUniTestkitFactory<RichTextInputAreaUniDriver>;
import {SearchUniDriver} from '../src/Search/Search.uni.driver';
export const searchTestkitFactory: PuppeteerUniTestkitFactory<SearchUniDriver>;
import {SectionHelperUniDriver} from '../src/SectionHelper/SectionHelper.uni.driver';
export const sectionHelperTestkitFactory: PuppeteerUniTestkitFactory<SectionHelperUniDriver>;
import {SegmentedToggleUniDriver} from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
export const segmentedToggleTestkitFactory: PuppeteerUniTestkitFactory<SegmentedToggleUniDriver>;
import {SidebarUniDriver} from '../src/Sidebar/Sidebar.uni.driver';
export const sidebarTestkitFactory: PuppeteerUniTestkitFactory<SidebarUniDriver>;
import {SidebarSectionTitleUniDriver} from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
export const sidebarSectionTitleTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionTitleUniDriver>;
import {SliderUniDriver} from '../src/Slider/Slider.uni.driver';
export const sliderTestkitFactory: PuppeteerUniTestkitFactory<SliderUniDriver>;
import {SocialPreviewUniDriver} from '../src/SocialPreview/SocialPreview.uni.driver';
export const socialPreviewTestkitFactory: PuppeteerUniTestkitFactory<SocialPreviewUniDriver>;
import {StepperUniDriver} from '../src/Stepper/Stepper.uni.driver';
export const stepperTestkitFactory: PuppeteerUniTestkitFactory<StepperUniDriver>;
import {SwatchesUniDriver} from '../src/Swatches/Swatches.uni.driver';
export const swatchesTestkitFactory: PuppeteerUniTestkitFactory<SwatchesUniDriver>;
import {TablePuppeteerDriver} from '../src/Table/Table.puppeteer.driver';
export const tableTestkitFactory: PuppeteerTestkitFactory<TablePuppeteerDriver>;
import {TabsUniDriver} from '../src/Tabs/Tabs.uni.driver';
export const tabsTestkitFactory: PuppeteerUniTestkitFactory<TabsUniDriver>;
import {TagUniDriver} from '../src/Tag/Tag.uni.driver';
export const tagTestkitFactory: PuppeteerUniTestkitFactory<TagUniDriver>;
import {TextPuppeteerDriver} from '../src/Text/Text.puppeteer.driver';
export const textTestkitFactory: PuppeteerTestkitFactory<TextPuppeteerDriver>;
import {TextButtonUniDriver} from '../src/TextButton/TextButton.uni.driver';
export const textButtonTestkitFactory: PuppeteerUniTestkitFactory<TextButtonUniDriver>;
import {ThumbnailUniDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
export const thumbnailTestkitFactory: PuppeteerUniTestkitFactory<ThumbnailUniDriver>;
import {TimeInputUniDriver} from '../src/TimeInput/TimeInput.uni.driver';
export const timeInputTestkitFactory: PuppeteerUniTestkitFactory<TimeInputUniDriver>;
import {ToggleSwitchUniDriver} from '../src/ToggleSwitch/ToggleSwitch.uni.driver';
export const toggleSwitchTestkitFactory: PuppeteerUniTestkitFactory<ToggleSwitchUniDriver>;
import {SidebarSectionItemUniDriver} from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
export const sidebarSectionItemTestkitFactory: PuppeteerUniTestkitFactory<SidebarSectionItemUniDriver>;
import {SidebarDividerUniDriver} from '../src/SidebarDivider/SidebarDivider.uni.driver';
export const sidebarDividerTestkitFactory: PuppeteerUniTestkitFactory<SidebarDividerUniDriver>;
import {SidebarBackButtonUniDriver} from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
export const sidebarBackButtonTestkitFactory: PuppeteerUniTestkitFactory<SidebarBackButtonUniDriver>;
import {SidebarHeaderUniDriver} from '../src/SidebarHeader/SidebarHeader.uni.driver';
export const sidebarHeaderTestkitFactory: PuppeteerUniTestkitFactory<SidebarHeaderUniDriver>;
import {ModalPreviewLayoutUniDriver} from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
export const modalPreviewLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalPreviewLayoutUniDriver>;
import {StatisticsWidgetUniDriver} from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
export const statisticsWidgetTestkitFactory: PuppeteerUniTestkitFactory<StatisticsWidgetUniDriver>;
import {ComposerHeaderUniDriver} from '../src/ComposerHeader/ComposerHeader.uni.driver';
export const composerHeaderTestkitFactory: PuppeteerUniTestkitFactory<ComposerHeaderUniDriver>;
import {FillPreviewUniDriver} from '../src/FillPreview/FillPreview.uni.driver';
export const fillPreviewTestkitFactory: PuppeteerUniTestkitFactory<FillPreviewUniDriver>;
import {FillButtonUniDriver} from '../src/FillButton/FillButton.uni.driver';
export const fillButtonTestkitFactory: PuppeteerUniTestkitFactory<FillButtonUniDriver>;
import {BarChartUniDriver} from '../src/BarChart/BarChart.uni.driver';
export const barChartTestkitFactory: PuppeteerUniTestkitFactory<BarChartUniDriver>;
import {InputWithLabelUniDriver} from '../src/InputWithLabel/InputWithLabel.uni.driver';
export const inputWithLabelTestkitFactory: PuppeteerUniTestkitFactory<InputWithLabelUniDriver>;
import {AutoCompleteWithLabelUniDriver} from '../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver';
export const autoCompleteWithLabelTestkitFactory: PuppeteerUniTestkitFactory<AutoCompleteWithLabelUniDriver>;
import {DividerUniDriver} from '../src/Divider/Divider.uni.driver';
export const dividerTestkitFactory: PuppeteerUniTestkitFactory<DividerUniDriver>;
import {LabelledElementUniDriver} from '../src/LabelledElement/LabelledElement.uni.driver';
export const labelledElementTestkitFactory: PuppeteerUniTestkitFactory<LabelledElementUniDriver>;
import {PreviewWidgetUniDriver} from '../src/PreviewWidget/PreviewWidget.uni.driver';
export const previewWidgetTestkitFactory: PuppeteerUniTestkitFactory<PreviewWidgetUniDriver>;
import {ModalMobileLayoutUniDriver} from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
export const modalMobileLayoutTestkitFactory: PuppeteerUniTestkitFactory<ModalMobileLayoutUniDriver>;
import {MediaOverlayUniDriver} from '../src/MediaOverlay/MediaOverlay.uni.driver';
export const mediaOverlayTestkitFactory: PuppeteerUniTestkitFactory<MediaOverlayUniDriver<HTMLElement>>;
import {InfoIconUniDriver} from '../src/InfoIcon/InfoIcon.uni.driver';
export const infoIconTestkitFactory: PuppeteerUniTestkitFactory<InfoIconUniDriver>;
import {SocialButtonUniDriver} from '../src/SocialButton/SocialButton.uni.driver';
export const socialButtonTestkitFactory: PuppeteerUniTestkitFactory<SocialButtonUniDriver>;
import {VerticalTabsUniDriver} from '../src/VerticalTabs/VerticalTabs.uni.driver';
export const verticalTabsTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsUniDriver>;
import {VerticalTabsItemUniDriver} from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';
export const verticalTabsItemTestkitFactory: PuppeteerUniTestkitFactory<VerticalTabsItemUniDriver>;
import {MobilePreviewWidgetUniDriver} from '../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver';
export const mobilePreviewWidgetTestkitFactory: PuppeteerUniTestkitFactory<MobilePreviewWidgetUniDriver>;
import {ListItemSectionUniDriver} from '../src/ListItemSection/ListItemSection.uni.driver';
export const listItemSectionTestkitFactory: PuppeteerUniTestkitFactory<ListItemSectionUniDriver>;
import {BrowserPreviewWidgetUniDriver} from '../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver';
export const browserPreviewWidgetTestkitFactory: PuppeteerUniTestkitFactory<BrowserPreviewWidgetUniDriver>;
import {ListItemSelectUniDriver} from '../src/ListItemSelect/ListItemSelect.uni.driver';
export const listItemSelectTestkitFactory: PuppeteerUniTestkitFactory<ListItemSelectUniDriver>;
import {TimeTableUniDriver} from '../src/TimeTable/TimeTable.uni.driver';
export const timeTableTestkitFactory: PuppeteerUniTestkitFactory<TimeTableUniDriver>;
import {MarketingLayoutUniDriver} from '../src/MarketingLayout/MarketingLayout.uni.driver';
export const marketingLayoutTestkitFactory: PuppeteerUniTestkitFactory<MarketingLayoutUniDriver>;
import {PaletteUniDriver} from '../src/Palette/Palette.uni.driver';
export const paletteTestkitFactory: PuppeteerUniTestkitFactory<PaletteUniDriver>;
import {VariableInputUniDriver} from '../src/VariableInput/VariableInput.uni.driver';
export const variableInputTestkitFactory: PuppeteerUniTestkitFactory<VariableInputUniDriver>;
import {ImageUniDriver} from '../src/Image/Image.uni.driver';
export const imageTestkitFactory: PuppeteerUniTestkitFactory<ImageUniDriver>;
import {SidePanelUniDriver} from '../src/SidePanel/SidePanel.uni.driver';
export const sidePanelTestkitFactory: PuppeteerUniTestkitFactory<SidePanelUniDriver>;
import {FontUpgradeUniDriver} from '../src/FontUpgrade/FontUpgrade.uni.driver';
export const fontUpgradeTestkitFactory: PuppeteerUniTestkitFactory<FontUpgradeUniDriver>;
import {CustomModalUniDriver} from '../src/CustomModal/CustomModal.uni.driver';
export const customModalTestkitFactory: PuppeteerUniTestkitFactory<CustomModalUniDriver>;
import {StatusIndicatorUniDriver} from '../src/StatusIndicator/StatusIndicator.uni.driver';
export const statusIndicatorTestkitFactory: PuppeteerUniTestkitFactory<StatusIndicatorUniDriver>;
import {PopoverMenuUniDriver} from '../src/PopoverMenu/PopoverMenu.uni.driver';
export const popoverMenuTestkitFactory: PuppeteerUniTestkitFactory<PopoverMenuUniDriver>;
import {HeaderUniDriver} from '../src/Card/Header/Header.uni.driver';
export const cardHeaderTestkitFactory: PuppeteerUniTestkitFactory<HeaderUniDriver>;
import {EditableRowUniDriver} from '../src/EditableSelector/EditableRow/EditableRow.uni.driver';
export const editableRowTestkitFactory: PuppeteerUniTestkitFactory<EditableRowUniDriver>;
import {MessageBoxMarketerialLayoutUniDriver} from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver';
export const messageBoxMarketerialLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxMarketerialLayoutUniDriver>;
import {MessageBoxFunctionalLayoutUniDriver} from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver';
export const messageBoxFunctionalLayoutTestkitFactory: PuppeteerUniTestkitFactory<MessageBoxFunctionalLayoutUniDriver>;
import {CardSubheaderUniDriver} from '../src/Card/Subheader/Subheader.uni.driver';
export const subheaderTestkitFactory: PuppeteerUniTestkitFactory<CardSubheaderUniDriver>;


export const draggableTestkitFactory: DeprecatedPuppeteerTestkit;
export const fieldLabelAttributesTestkitFactory: DeprecatedPuppeteerTestkit;
