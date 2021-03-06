/**
 * This is a fake index.ts file, for auto-generating the types of all the inline required components.
 * The real index file that will be bundled is "src/index.js".
 * Please use this file for declaring all the exports, so they could be picked up by typescript's complier
 */

export * from './style';
export {default as Avatar, AvatarPropTypes} from './components/avatar';
export {default as Card, CardPropTypes, CardSectionProps} from './components/card';
export {default as View, ViewPropTypes} from './components/view';
export {default as Text, TextPropTypes} from './components/text';
export {default as TouchableOpacity, TouchableOpacityProps} from './components/touchableOpacity';
export {default as Button, ButtonPropTypes} from './components/button';
export {default as Checkbox, CheckboxPropTypes} from './components/checkbox';
export {default as Chip, ChipPropTypes} from './components/chip';
export {default as FloatingButton, FloatingButtonProps} from './components/floatingButton';
export {default as Image, ImageProps} from './components/image';
export {default as Overlay, OverlayTypes} from './components/overlay';
export {default as RadioButton, RadioButtonPropTypes} from './components/radioButton/RadioButton';
export {default as RadioGroup, RadioGroupPropTypes} from './components/radioButton/RadioGroup';
export {default as TabBar} from './components/TabBar';

//================ Manual typings (all those exports should be removed one day) ==========
export {
  ActionBar, ActionSheet, Badge, BadgeProps, Carousel, ConnectionStatusBar, Dialog, DialogProps, Drawer,
  FeatureHighlight, Hint, BaseInput, TextArea, TextField, MaskedInput, ListItem, PageControl, PanningProvider,
  PanGestureView, PanListenerView, PanDismissibleView, PanResponderView, Picker, PickerProps, ProgressBar, Slider,
  GradientSlider, ColorSliderGroup, Stepper, TagsInput, SharedTransition, StackAggregator, Toast,
  WheelPickerDialog, Assets, BaseComponent, PureBaseComponent, UIComponent, forwardRef, AvatarHelper, Constants,
  LogService, LoaderScreen, Modal, StateScreen, WheelPicker, WheelPickerProps, Incubator, ColorPicker
} from '../typings';
