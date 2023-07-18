import NoPoster from '../images/no-poster.png'

export function getImg(data) {
  if (data) return `https://image.tmdb.org/t/p/w300${data}`
  else return NoPoster
}

export function getInfo(arr) {
  for (const el of arr) {
    if (el) return el
  }
}

export function getListToStr(arr) {
  if (!arr) return '';

  return arr
    .map(el => el.name)
    .join(', ');
}