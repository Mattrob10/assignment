import React from "react"
import FriendList from "./FriendList"

export default function Main() {
    return (
        <div className="main">
            <div className="wrapper">
                <div className="info">
                  <h1>Gather here and meet like-minded Animal Friends</h1>
                </div>
            </div>
            <FriendList />
        </div>
    )
}