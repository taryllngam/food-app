import React, { useState } from 'react'
import Model from 'react-modal'

export default function Modal(props) {
    const [visible, setVisible] = useState(false)
  return (
    <div>
  <button  onClcick={() =>setVisible(true)}></button>
  <Model isOpen={true} onRequestClose={() =>setVisible(false)}>
    <h1>Model Body</h1>
    <button onClcick={() =>setVisible(false)}>close</button>
  </Model>
    </div>
  )
}
