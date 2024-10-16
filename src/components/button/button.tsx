import { ComponentProps } from "react";
// import clsx from 'clsx';
import styles from './button.module.css';

import { variants, type ButtonVariants } from './button-variants';

//Adding in the ComponentProps here will also allow for any other prop allowed by a button
//And we add in our custom props
//Steve recommends exporting props so they can be used later as types for supersets of you component
export type ButtonProps = ComponentProps<'button'> & ButtonVariants & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
}

//Here you need to decide if you will allow for devs to add classes
//do this with caution (not always good to give customization)
export const Button = ({ variant = 'primary', size = 'medium', className, ...props } : ButtonProps) => {

  //This is a custom library to allow for some simpler ternary logic
  //will block anything that is falsey
  // const classes = clsx(
  //   styles.button,
  //   styles[variant],
  //   styles[size],
  //   className,
  // );
  //
  // if(variant === 'secondary') className += ' ' + styles.secondary;
  // if(variant === 'destructive') className += ' ' + styles.destructive;

  return <button className={variants({variant, size})} {...props} />;
};
