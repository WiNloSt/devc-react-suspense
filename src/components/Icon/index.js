import React from 'react'
import styled from 'styled-components'

/**
 * @param {object} props
 * @param {"world"|"comment-outlined"|"like-outlined"} props.name
 * @param {"small"|"big"=} props.size
 */
export function Icon({ name, size = 'small' }) {
  let position, spriteName

  switch (name) {
    case 'world':
      position = '0 -135px'
      spriteName = 'icons1'
      break

    case 'comment-outlined':
      position = '0 -171px'
      spriteName = 'icons3'
      break

    case 'like-outlined':
      position = '0 -444px'
      spriteName = 'icons2'
      break

    default:
      position = ''
      spriteName = ''
  }

  const sizeMap = {
    small: 12,
    big: 18
  }

  return (
    // @ts-ignore
    <BaseIcon
      position={position}
      spriteName={spriteName}
      size={sizeMap[size]}
    />
  )
}

export const BaseIcon = styled.i`
  background-image: ${({
    // @ts-ignore
    spriteName
  }) => `url(/sprites/${spriteName}.png)`};
  background-repeat: no-repeat;
  display: inline-block;
  ${({
    // @ts-ignore
    spriteName
  }) => {
    if (spriteName === 'icons2') return 'background-size: 73px 647px;'
    if (spriteName === 'icons3') return 'background-size: 28px 554px;'
  }};
  height: ${({
    // @ts-ignore
    size
  }) => size}px;
  width: ${({
    // @ts-ignore
    size
  }) => size}px;
  background-position: ${({
    // @ts-ignore
    position
  }) => position};
`
