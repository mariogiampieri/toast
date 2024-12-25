import { useCallback, useEffect, useState } from 'react';
import type {
  Position,
  ToastIcons,
  ToastOptions,
  ToastPropsWithLoading,
  Variant,
} from '../types/toast.types';

import { Error, Info, Loading, Success, Warning } from '../icons';
import { useTimeout } from '../hooks/useTimeout';
import { classNames, prefersReducedMotion } from '../utils';

const iconsColors: Record<Variant, string> = {
  success: '#22c55e',
  error: '#ef4444',
  warning: '#eab308',
  info: '#3b82f6',
  loading: 'currentColor',
};

interface ToastComponentProps extends ToastPropsWithLoading {
  toastPosition: Position;
  toastOptions?: ToastOptions;
  onClose: () => void;
}

const Toast = (props: ToastComponentProps) => {
  const [status, setStatus] = useState<Variant>(props.variant || 'info');
  const [iconColor, setIconColor] = useState<string>(iconsColors[status]);
  const [toastText, setToastText] = useState<string>(props.text);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const delayDuration = props.delayDuration || 4000;

  const { pause, resume } = useTimeout(() => {
    handleCloseToast();
  }, delayDuration);

  const iconClass = classNames(
    't_icon',
    props.variant === 'loading' && status === 'loading' ? 't_loading' : '',
  );

  const icons: ToastIcons = {
    success: (
      <Success
        width={18}
        height={18}
        style={{ fill: iconColor }}
        className={iconClass}
      />
    ),
    error: (
      <Error
        width={18}
        height={18}
        style={{ fill: iconColor }}
        className={iconClass}
      />
    ),
    warning: (
      <Warning
        width={18}
        height={18}
        style={{ fill: iconColor }}
        className={iconClass}
      />
    ),
    info: (
      <Info
        width={18}
        height={18}
        style={{ fill: iconColor }}
        className={iconClass}
      />
    ),
    loading: (
      <Loading
        width={18}
        height={18}
        style={{ fill: iconColor }}
        className={iconClass}
      />
    ),
  };

  const IconComponent = props.toastOptions?.icons
    ? props.toastOptions?.icons[status]
    : icons[status];

  const handleCloseToast = useCallback(() => {
    setIsExiting(true);
    const animationDisabled = prefersReducedMotion();
    if (!animationDisabled) {
      setTimeout(() => {
        if (props.onClose) {
          props.onClose();
        }
      }, 300);
    } else if (props.onClose) {
      props.onClose();
    }
  }, [props]);

  const handleMouseLeave = () => {
    resume();
  };

  const handleMouseEnter = () => {
    pause();
  };

  const ANIMATION_ENTER_MAP: Record<Position, string> = {
    'top-left': 't_slide-top',
    'top-right': 't_slide-top',
    'top-center': 't_slide-top',
    'bottom-left': 't_slide-bottom',
    'bottom-right': 't_slide-bottom',
    'bottom-center': 't_slide-bottom',
  };

  const ANIMATION_EXIT_MAP: Record<Position, string> = {
    'top-left': 't_slide-left',
    'top-right': 't_slide-right',
    'top-center': 't_slide-top-exit',
    'bottom-left': 't_slide-left',
    'bottom-right': 't_slide-right',
    'bottom-center': 't_slide-bottom-exit',
  };

  const animationClass = isExiting
    ? ANIMATION_EXIT_MAP[props.toastPosition]
    : ANIMATION_ENTER_MAP[props.toastPosition];

  useEffect(() => {
    if (props.variant === 'loading' && props.options) {
      pause();

      const executePromise =
        typeof props.options.promise === 'function'
          ? props.options.promise()
          : Promise.resolve(props.options.promise);

      executePromise
        .then((data) => {
          resume();
          setStatus('success');
          if (props.options!.autoDismiss) {
            setTimeout(() => {
              handleCloseToast();
            }, delayDuration);
          }
          setToastText(props.options!.success);
          setIconColor(iconsColors.success);
          if (props.options?.onSuccess) {
            props.options.onSuccess(data);
          }
        })
        .catch((error) => {
          setStatus('error');
          setToastText(props.options!.error);
          setIconColor(iconsColors.error);
          if (props.options!.autoDismiss) {
            setTimeout(() => {
              handleCloseToast();
            }, delayDuration);
          }
          if (props.options?.onError) {
            props.options.onError(error);
          }
        });
    }
  }, [
    delayDuration,
    handleCloseToast,
    pause,
    props.options,
    props.variant,
    resume,
  ]);

  return (
    <div
      role="alert"
      aria-labelledby={`toast-title-${props.id}`}
      aria-describedby={`toast-description-${props.id}`}
      title={props.text}
      className={classNames(
        !props.toastOptions?.headless && prefersReducedMotion()
          ? ''
          : animationClass,
        !props.toastOptions?.headless && props.theme === 'system'
          ? 't_system-theme'
          : '',
        !props.toastOptions?.headless && props.theme === 'dark'
          ? 't_dark-theme'
          : '',
        !props.toastOptions?.headless && props.theme === 'light'
          ? 't_light-theme'
          : '',
        props.toastOptions?.headless
          ? props.toastOptions?.classNames?.toast
          : 't_global',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div
        className={
          props.toastOptions?.headless
            ? props.toastOptions?.classNames?.container
            : 't_container'
        }
      >
        {props.variant && !props.icon ? (
          <div
            className={
              props.toastOptions?.headless
                ? props.toastOptions?.classNames?.icon
                : 't_icon'
            }
          >
            {IconComponent}
          </div>
        ) : (
          props.icon && (
            <div
              className={
                props.toastOptions?.headless
                  ? props.toastOptions?.classNames?.icon
                  : 't_icon'
              }
            >
              {props.icon}
            </div>
          )
        )}
        <div
          className={
            props.toastOptions?.headless
              ? props.toastOptions?.classNames?.content
              : 't_content'
          }
        >
          <p id={`toast-title-${props.id}`}>{toastText}</p>
          {props.description && (
            <p id={`toast-description-${props.id}`}>{props.description}</p>
          )}
        </div>
      </div>
      <div
        className={
          props.toastOptions?.headless
            ? props.toastOptions?.classNames?.actions.container
            : 't_actions'
        }
      >
        {props.action && (
          <button
            onClick={props.action.onClick}
            title={
              typeof props.action.content === 'string'
                ? props.action.content
                : 'Action Button'
            }
            className={
              props.toastOptions?.headless
                ? props.toastOptions?.classNames?.actions.actionBtn
                : 't_action'
            }
          >
            {props.action.content ??
              props.toastOptions?.defaultActionContent ??
              'Action'}
          </button>
        )}
        <button onClick={handleCloseToast} title="Close toast">
          {props.toastOptions?.defaultCloseContent ?? 'Close'}
        </button>
      </div>
    </div>
  );
};

export default Toast;
