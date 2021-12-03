export function getStyle(styles, filter = []) {
  const needUnit = [
    'fontSize',
    'width',
    'height',
    'top',
    'left',
    'borderWidth',
    'letterSpacing',
    'borderRadius',
  ]

  const result = {}

  Object.keys(styles).forEach(key => {
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        result[key] = styles[key]
        if (needUnit.includes(key)) {
          result[key] += 'px';
        }
      } else {
        result.transform = `${key}(${styles[key]}deg)`
      }
    }
  })

  return result;
}