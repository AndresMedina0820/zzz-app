import { useRef, useEffect, useState } from 'react';
import { ModalDatepickerProps } from '../types/ModalDatepicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import './styless.css';

export const ModalDatepicker = ({ isOpen, onClose }: ModalDatepickerProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [valueClock, setValueClock] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    console.log('isOpen', isOpen)
    const dialog = dialogRef?.current;

    if (dialog) {
      isOpen ? dialog?.showModal() : dialog?.close();
    }

    // if (dialog) {
    //   if (isOpen) {
    //     dialog.showModal();
    //   } else {
    //     setAnimation('fadeIn');
    //     setTimeout(() => {
    //       dialog.close();
    //       setAnimation('fadeOut');
    //     }, 500);
    //   }
    // }
  }, [isOpen, onClose]);

  const handleChange = (newValue: any) => {
    setValueClock(newValue);
    console.log('valueClock', valueClock);
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && event.target === dialog) {
      onClose();
    }
  }

  return (
    <dialog ref={dialogRef} className={`modal ${animation}`} onClick={handleBackdropClick}>
      <div className='body'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeClock onChange={(newValue) => handleChange(newValue)} />
        </LocalizationProvider>
        {/* <hr />
        <h1>{ valueClock ? valueClock.format('YYYY-MM-DD HH:mm') : '' }</h1> */}
      </div>
      <div className='action-buttons'>
        <button onClick={() => onClose()}>Aceptar</button>
        <button onClick={() => onClose()}>Cancelar</button>
      </div>
    </dialog>
  )
}
