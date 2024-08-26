import React, { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss';

interface IButton {
  text: string;
  onClick: MouseEventHandler;
}
export function BaseButton ({ text, onClick }: IButton) {
  return <Button className={`mt-2 ${styles["bordered-btn"]}`} variant="primary" onClick={onClick}>{text}</Button>
}