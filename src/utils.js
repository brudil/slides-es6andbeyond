
export function bindShowHelper(actionIndex) {
  const defaultHideStyle = {
    display: 'none'
  };

  return {
    at: (targetIndex, hideStyle = defaultHideStyle) => targetIndex === actionIndex ? {} : hideStyle,
    from: (fromIndex, hideStyle = defaultHideStyle) => {
      return actionIndex >= fromIndex ? {} : hideStyle;
    },
    until: (untilIndex, hideStyle = defaultHideStyle) => untilIndex > actionIndex ? {} : hideStyle,
    withArray: (list, offsetIndex = 0) => {
      const listIndex = actionIndex - offsetIndex;

      if (listIndex <= 0) {
        return list[0];
      }

      if (listIndex >= list.length) {
        return list[list.length];
      }

      return list[actionIndex - offsetIndex];
    }
  };
}
