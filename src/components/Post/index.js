import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import { Icon } from './../Icon/index'
import { Card } from '../Card'

export const Post = () => (
  <Card>
    <PostContainer>
      <Header />
      <Content style={{ marginTop: 6, marginBottom: 10 }} />
      <Actions />
    </PostContainer>
  </Card>
)

const PostContainer = styled.div`
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
`

function Header() {
  return (
    <HeaderContainer>
      <Avatar />
      <div>
        <Name />
        <Meta />
      </div>
      <Options className="options" />
    </HeaderContainer>
  )
}

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  background-image: url('profilePictures/1-men-thumbnail.jpg');
  background-size: contain;
`

const HeaderContainer = styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }

  display: flex;
  align-items: center;
  position: relative;

  > ${Avatar} {
    float: left;
    margin-right: 8px;
  }

  > .options {
    position: absolute;
    top: -4px;
    right: 0;
  }
`

function Name() {
  return <NameContainer>John Wick</NameContainer>
}

const NameContainer = styled.a`
  color: #385898;
  font-weight: 600;
  cursor: pointer;
`

function Meta() {
  const time = 1563728775182
  return (
    <MetaContainer>
      <RelativeTime time={time} /> · <Icon name="world" />
    </MetaContainer>
  )
}

const MetaContainer = styled.div`
  font-size: 12px;
  color: #616770;
`

function RelativeTime({ time }) {
  const minutesDiff = dayjs().diff(time, 'minute')

  if (minutesDiff > 60 * 24) {
    return <>{dayjs(time).format('D MMM [at] HH:mm')}</>
  }

  return <>{dayjs().to(time, true)}</>
}

function Options({ className }) {
  return (
    <OptionsContainer className={className}>
      <Dots />
    </OptionsContainer>
  )
}

const OptionsContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
`

const Dots = styled.div`
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background: gray;
  box-shadow: 8px 0px 0px 0px gray, 16px 0px 0px 0px gray;
`

function Content({ style }) {
  return (
    <div style={style}>
      เหมือนพร้อมเพย์จะเป็นโปรเจกต์ที่ประสบความสำเร็จมาก
      ต้องนับถือคนที่ผลักดันเรื่องนี้จนสำเร็จ
      ทุกวันนี้กินข้าวสี่สิบบาทแทบไม่ต้องควักเงินสดจ่ายแล้ว
    </div>
  )
}

function Actions() {
  return (
    <ActionsContainer>
      <div>
        <button>
          <Icon name="like-outlined" size="big" />
          Like
        </button>
      </div>
      <div>
        <button>
          <Icon name="comment-outlined" size="big" />
          Comment
        </button>
      </div>
    </ActionsContainer>
  )
}

const ActionsContainer = styled.div`
  display: flex;
  color: #606770;
  font-size: 13px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular',
    sans-serif;
  border-top: 1px solid #dadde1;

  > div {
    padding-top: 4px;
    padding-bottom: 4px;
    flex: 1;
    text-align: center;
  }

  button {
    cursor: pointer;
    height: 32px;
    border: none;
    background: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 2px;
    }

    > i {
      margin-right: 6px;
    }
  }
`
