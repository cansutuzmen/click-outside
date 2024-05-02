import { useEffect } from 'react';

export const useOnClickOutside = ({
  ref,
  handler,
  active = false,
  exceptionRef,
}) => {
  const listener = (event) => {
    if (
      (ref?.current?.contains(event.target) ||
        !exceptionRef?.current?.contains(event.target)) &&
      active
    )
      handler(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
